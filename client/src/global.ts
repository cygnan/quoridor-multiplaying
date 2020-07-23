import {Observable} from "rxjs";
import {ChatMessage} from "./socket/types";
import App from "./socket/QuoridorSocketIO";

export class globalVariables {
    public static app: App;
}

