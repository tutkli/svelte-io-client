import {writable} from "svelte/store";
import {ChatMessage} from "../models/message.model";

function messagesStore() {
    const { subscribe, set, update } = writable<ChatMessage[]>([
        new ChatMessage(false, 'Lorem ipsum dolor sit amet'),
        new ChatMessage(true, 'Nam pretium elit ut tellus vulputate')
    ]);

    return {
        subscribe,
        addMessage: (message: string) => {
            update(messages => [...messages, new ChatMessage(true, message)]);
        },
        resetMessages: () => {
            set([]);
        }
    }
}

export const messages = messagesStore();
export const chatOpened = writable<boolean>(false);
