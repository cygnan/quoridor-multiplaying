// The following repository was useful for writing WebWorker code.
// https://github.com/Qwaz/webworker-with-typescript/tree/master/multiple-entry

import {State} from "./quoridor_core";
import {agent_list} from "./agents/agent_list";
import {ChatMessage} from "./socket/types";
import App from "./socket/QuoridorSocketIO";


const ctx: Worker = self as any;

ctx.addEventListener('message', message => {
  const [state_raw, agent_name, app]: [number, number, App] = message.data;
  // const state = State.prototype.clone.apply(state_raw);  // State instance should be re-created
  // const agent = agent_list[agent_name];





  // const cpu_act: number = dataFromOpponent.author;
  // const cpu_act = dataFromOpponent.author;
  // const cpu_act = agent(state);
  ctx.postMessage([state_raw, agent_name, app]);
});
