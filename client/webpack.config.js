const path = require('path');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');

module.exports = {
  entry: {
    main: './src/main.ts',
    worker: './src/agent.worker.ts',
    socket: './src/socket/index.tsx',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js",
    library: "[name]",
    // libraryTarget: "umd"
    // filename: 'main.js'
  },
  resolve: {
    extensions:['.ts', '.js', '.tsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test:/\.tsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          customize: require.resolve(
              'babel-preset-react-app/webpack-overrides'
          ),
          // @remove-on-eject-begin
          babelrc: false,
          configFile: false,
          presets: [require.resolve('babel-preset-react-app')],
          // Make sure we have a unique cache identifier, erring on the
          // side of caution.
          // We remove this when the user ejects because the default
          // is sane and uses Babel options. Instead of options, we use
          // the react-scripts and babel-preset-react-app versions.
          cacheIdentifier: getCacheIdentifier(
              'production',
              [
                'babel-plugin-named-asset-import',
                'babel-preset-react-app',
                'react-dev-utils',
                'react-scripts',
              ]
          ),
          // @remove-on-eject-end
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent:
                        '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
            // isEnvDevelopment &&
            // shouldUseReactRefresh &&
            // require.resolve('react-refresh/babel'),
          ].filter(Boolean),
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,
          compact: true,
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  }
}
