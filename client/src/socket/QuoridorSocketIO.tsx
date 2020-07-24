import {ChatMessage, Player, PlayersState} from './types';
import {timer} from "rxjs";
import {ChatEvent} from "./constants";


export class App {
  socket: SocketIOClient.Socket;
  message: ChatMessage;
  playerState: PlayersState;

  constructor() {
    const io = require('socket.io-client');
    console.log('Connecting to server...')
    this.socket = io('http://localhost:8080', {});

    this.socket.on(ChatEvent.CONNECT, () => {
      if (this.socket.connected) {
        console.log('Connected to server.')
      }
    });

    this.socket.on(ChatEvent.DISCONNECT, (reason: string) => {
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        this.socket.connect();
      }
      console.log('Disconnected.')
      // else the socket will automatically try to reconnect
    });
  }

  static delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  static sleep(s: number) {
    timer(5000).subscribe(x => {})
  }

  send(m: ChatMessage) {
    this.socket.emit(ChatEvent.MESSAGE, m);
  }

  receive(): void {
    this.waitUntilReception().then((m: ChatMessage) => {
      // you can use message here and only in here
      this.message = m;
    });
  }

  waitUntilReception(): Promise<ChatMessage> {
    const timeout = 24;
    return new Promise((resolve, reject) => {
      let timer: number;

      function responseHandler(m: ChatMessage) {
        // resolve promise with the value we got
        resolve(m);
        clearTimeout(timer);
      }

      this.socket.once(ChatEvent.MESSAGE, responseHandler);

      // set timeout so if a response is not received within a
      // reasonable amount of time, the promise will reject
      timer = setTimeout(() => {
        reject(new Error("timeout waiting for chat message"));
        this.socket.removeListener(ChatEvent.MESSAGE, responseHandler);
      }, timeout * 1000 * 3600);
    });
  }

  waitUntilGameBeginning(): Promise<Player> {
    const timeout = 24;
    return new Promise((resolve, reject) => {
      let timer: number;

      function responseHandler(player: Player) {
        // resolve promise with the value we got
        resolve(player);
        clearTimeout(timer);
      }

      this.socket.once(ChatEvent.GAME_INFO, responseHandler);

      // set timeout so if a response is not received within a
      // reasonable amount of time, the promise will reject
      timer = setTimeout(() => {
        reject(new Error("timeout waiting for game_info"));
        this.socket.removeListener(ChatEvent.GAME_INFO, responseHandler);
      }, timeout * 1000 * 3600);
    });
  }

  sendPlayAgain() {
    this.socket.emit(ChatEvent.PLAY_AGAIN, '');
  }

  waitUntilPlayAgain(): Promise<string> {
    const timeout = 24;
    return new Promise((resolve, reject) => {
      let timer: number;

      function responseHandler(s: string) {
        // resolve promise with the value we got
        resolve(s);
        clearTimeout(timer);
      }

      this.socket.once(ChatEvent.PLAY_AGAIN, responseHandler);

      // set timeout so if a response is not received within a
      // reasonable amount of time, the promise will reject
      timer = setTimeout(() => {
        reject(new Error("timeout waiting for play_again"));
        this.socket.removeListener(ChatEvent.PLAY_AGAIN, responseHandler);
      }, timeout * 1000 * 3600);
    });
  }
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
