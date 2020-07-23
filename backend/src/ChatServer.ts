import * as express from 'express';
import * as socketIo from 'socket.io';
import { ChatEvent } from './constants';
import {ChatMessage, Player, Player_NUM, PlayersState} from './types';
import { createServer, Server } from 'http';

var cors = require('cors');

export class ChatServer {
  public static readonly PORT: number = 8080;
  private _app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;
  private playersState: PlayersState;

  constructor () {
    this._app = express();
    this.port = process.env.PORT || ChatServer.PORT;
    this._app.use(cors());
    this._app.options('*', cors());
    this.server = createServer(this._app);
    this.initSocket();
    this.listen();
    this.playersState = {};
  }

  private initSocket (): void {
    this.io = socketIo(this.server);
  }

  private listen (): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on(ChatEvent.CONNECT, (socket: socketIo.Socket) => {
      console.log(`Client[${socket.id}] connected on port ${this.port}`);
      const allConnectedClients: string[] = Object.keys(this.io.sockets.sockets)
      console.log(`> All connected clients: ${JSON.stringify(allConnectedClients)}`);
      let player_num: Player_NUM;
      if (allConnectedClients.length <= 2) {
        const first_player_id: string = Object.keys(this.playersState)[0];
        player_num = 1 - this.playersState[first_player_id].player_num as Player_NUM;
      } else {
        player_num = -1;
      }
      const player: Player = {
        id: socket.id,
        player_num: player_num
      };
      this.playersState[player.id] = player;
      console.log(`> Client[${socket.id}] player_num ${player.player_num} assigned`);
      console.log(`> playersState: ${JSON.stringify(this.playersState)}`);
      if (allConnectedClients.length == 2) this.startGame();

      socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
        console.log(`Client[${socket.id}](message): ${JSON.stringify(m)}`);
        const allConnectedClients: string[] = Object.keys(this.io.sockets.sockets);
        const opponents: string[] = allConnectedClients.filter(array => array !== socket.id);
        opponents.forEach((opponent: string) => {
          this.io.to(opponent).emit(ChatEvent.MESSAGE, m);
          console.log(`> Forwarded act client[${socket.id}] => client[${opponent}]`);
        })
      });

      socket.on(ChatEvent.DISCONNECT, () => {
        console.log(`Client[${socket.id}] disconnected`);
        const allConnectedClients: string[] = Object.keys(this.io.sockets.sockets)
        console.log(`> All connected clients: ${JSON.stringify(allConnectedClients)}`);
        delete this.playersState[socket.id];
        console.log(`> Client[${socket.id}] playerState deleted`);
        console.log(`> playersState: ${JSON.stringify(this.playersState)}`);
      });
    });
  }

  get app (): express.Application {
    return this._app;
  }

  private startGame(): void {
    console.log(`> Start game.`);
    Object.keys(this.playersState).forEach((id: string) => {
      let player: Player = this.playersState[id];
      if (player.player_num <= 2) {
        this.io.to(id).emit(ChatEvent.GAME_INFO, this.playersState[id]);
      }
      console.log(`> Client[${id}](game_info) sent game info`);
    })
  }
}
