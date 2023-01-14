import {writable} from "svelte/store";
import {socket} from "$lib/socketIo-client";
import type {ChatMessage} from "$lib/models/message.model";
import {messages} from "$lib/stores/chat.store";

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
