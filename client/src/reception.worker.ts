// The following repository was useful for writing WebWorker code.
// https://github.com/Qwaz/webworker-with-typescript/tree/master/multiple-entry

import {State} from "./quoridor_core";
import {agent_list} from "./agents/agent_list";

import {ChatMessage} from "./socket/types";
import App from "./socket/QuoridorSocketIO";

const ctx: Worker = self as any;

ctx.addEventListener('message', message => {

  // const cpu_act = agent(state);
  ctx.postMessage([cpu_act, state.turn, app]);
});
