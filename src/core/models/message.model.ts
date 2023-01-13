import {v4} from "uuid";

export class ChatMessage {
    id: string;
    clientMessage: boolean;
    message: string;
    time: string;

    constructor(clientMessage: boolean, message: string, time?: string) {
        this.id = v4();
        this.clientMessage = clientMessage;
        this.message = message;
        this.time = time ?? new Date().toLocaleString();
    }
}
