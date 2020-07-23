import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { ChatMessage, ChatState } from './types';
import { ChatContext } from './ChatContext';
import {Observable} from "rxjs";
import {switchAll} from "rxjs/operators";
import {globalVariables} from "../global";


class App extends React.Component {
  static contextType = ChatContext;

  state: ChatState = {
    messages: [
      {
        message: 'Welcome! Type a message and press Send Message to continue the chat.',
        cpu_act: 'Bot'
      }
    ],
    input: ''
  }

  componentDidMount () {

    //initiate socket connection
    this.context.init();

    globalVariables.observable = this.context.onMessage();

    globalVariables._send = this.context.send;
    //
    // observable.subscribe((m: ChatMessage) => {
    //   let messages = this.state.messages;
    //
    //   messages.push(m);
    //   this.setState({ messages: messages });
    // });
  }

  componentWillUnmount () {
    this.context.disconnect();
  }

  render () {

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ input: e.target.value });
    }

    const handleMessage = (): void => {

      const author: string = 'Ross';

      if (this.state.input !== '') {
        this.context.send({
          message: this.state.input,
          author: author
        });
        this.setState({ input: '' });
      }
    };

    let msgIndex = 0;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-chatbox">
          {this.state.messages.map((msg: ChatMessage) => {
            msgIndex++;
            return (
              <div key={msgIndex}>
                <p>{msg.cpu_act}</p>
                <p>
                  {msg.turn}
                </p>
              </div>
            );
          })}
        </div>
        <input
          className="App-Textarea"
          placeholder="Type your messsage here..."
          onChange={updateInput}
          value={this.state.input}
        />
        <p>
          <button onClick={() => { handleMessage() }}>
            Send Message
          </button>
        </p>
      </div>
    );
  }
}

export default App;
