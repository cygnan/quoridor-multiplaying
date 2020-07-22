import {Observable} from "rxjs";
import {ChatMessage} from "./socket/types";

export class globalVariables {
    public static observable: Observable<ChatMessage>;
    public static dataFromOpponent: ChatMessage;
    public static _send: any;

    public static waitData(): void {
        globalVariables.observable.subscribe((m: ChatMessage) => {
            globalVariables.dataFromOpponent = m;
        });
    }

    public static sendData(m: ChatMessage) {
        ((m: ChatMessage) => globalVariables._send(m))(m);
        console.log("Sent message")
    };
}

