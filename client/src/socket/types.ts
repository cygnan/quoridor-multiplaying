export interface ChatMessage {
  cpu_act: number;
  turn: number;
}

export interface ChatState {
  input: string;
  messages: ChatMessage[];
}
