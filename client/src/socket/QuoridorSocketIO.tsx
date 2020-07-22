import { ChatMessage } from './types';


export class App {
  static socket: SocketIOClient.Socket;

  constructor() {
    while (true) {
      console.log('Connecting to server...')
      App.socket = io('http://localhost:8080', {
        path: '/'
      });
      if (App.socket.connected) {
        break;
      } else {
        console.log('Failed to connect. Retrying in 5 seconds.')
        this.sleep(5)
      }
    }
    console.log('Connected.')
    console.log(`socket.id: $(socket.id)`);

    App.socket.on('disconnect', (reason: string) => {
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        App.socket.connect();
      }
      // else the socket will automatically try to reconnect
    });
  }

  sleep(s: number) {
    (async () => {
      await new Promise( resolve => setTimeout(resolve, s * 1000.0) );
    })();
    return
  }

//   send(m: ChatMessage) {
//     App.socket.emit('message', m);
//   }
//
//
//   componentDidMount () {
//
//     //initiate socket connection
//     this.context.init();
//
//     globalVariables.observable = this.context.onMessage();
//
//     globalVariables._send = this.context.send;
//     //
//     // observable.subscribe((m: ChatMessage) => {
//     //   let messages = this.state.messages;
//     //
//     //   messages.push(m);
//     //   this.setState({ messages: messages });
//     // });
//   }
//
//   componentWillUnmount () {
//     this.context.disconnect();
//   }
//
//   render () {
//
//     const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
//       this.setState({ input: e.target.value });
//     }
//
//     const handleMessage = (): void => {
//
//       const author: string = 'Ross';
//
//       if (this.state.input !== '') {
//         this.context.send({
//           message: this.state.input,
//           author: author
//         });
//         this.setState({ input: '' });
//       }
//     };
//
//     let msgIndex = 0;
//     return (
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//
//         <div className="App-chatbox">
//           {this.state.messages.map((msg: ChatMessage) => {
//             msgIndex++;
//             return (
//               <div key={msgIndex}>
//                 <p>{msg.author}</p>
//                 <p>
//                   {msg.message}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <input
//           className="App-Textarea"
//           placeholder="Type your messsage here..."
//           onChange={updateInput}
//           value={this.state.input}
//         />
//         <p>
//           <button onClick={() => { handleMessage() }}>
//             Send Message
//           </button>
//         </p>
//       </div>
//     );
//   }
}

export default App;
