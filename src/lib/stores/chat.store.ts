import {writable} from "svelte/store";
import type {ChatMessage} from "$lib/models/message.model";
import {v4} from "uuid";

const offlineMessage = {
    username: 'Socket.io Client',
    clientMessage: false,
    message: `We couldn't connect to the Socket.io Server. Check the connection and try again.`,
    time: new Date(),
};

function messagesStore() {
    const { subscribe, set, update } = writable<ChatMessage[]>([]);

    return {
        subscribe,
        addOfflineMessage: () => {
            update(messages => [...messages, {...offlineMessage, id: v4()}])
        },
        addMessage: (newMessage: ChatMessage) => {
            update(messages => [...messages, newMessage]);
        },
        resetMessages: () => {
            set([]);
        }
    }
}

export const messages = messagesStore();
export const chatOpened = writable<boolean>(false);
