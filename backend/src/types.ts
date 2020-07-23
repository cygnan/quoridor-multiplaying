export interface ChatMessage {
  cpu_act: number;
  turn: number;
}

export type Player_NUM = 0 | 1 | -1;

export interface Player {
  id: string;
  player_num: Player_NUM;
}

export interface GameInfo {
  you: Player;
}

export interface PlayersState {
  [id: string]: Player;
}
