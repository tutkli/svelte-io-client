import {writable} from "svelte/store";

// socket.on('connect', (): void => {
//     connected.set(true);
// });
// socket.on('connect_error', (error: Error): void => {
//     connected.set(false);
//     console.error(error);
// });
// socket.on('disconnect', (): void => {
//     connected.set(false);
// });
// socket.on('message', (serverMessage: string): void => {
//     messages.addMessage(serverMessage);
// });

export const connected = writable<boolean>(false);
