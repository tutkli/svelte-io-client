import {writable} from "svelte/store";
import {socket} from "$lib/socketIo-client";
import {messages} from "./chat.store";
import type {ChatMessage} from "../models/message.model";

socket.on('connect', (): void => {
    connected.set(true);
});
socket.on('connect_error', (error: Error): void => {
    connected.set(false);
    console.error(error);
});
socket.on('disconnect', (): void => {
    connected.set(false);
});
socket.on('message', (serverMessage: ChatMessage): void => {
    messages.addMessage(serverMessage);
});

export const connected = writable<boolean>(false);
