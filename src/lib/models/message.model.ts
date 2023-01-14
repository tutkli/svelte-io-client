export interface ChatMessage {
    id: string;
    username: string
    clientMessage: boolean;
    message: string;
    time: Date;
}
