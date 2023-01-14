import {io} from "socket.io-client";

const SERVER_ENDPOINT = 'http://localhost:3000';
export const socket = io(SERVER_ENDPOINT, {transports: ['websocket'] });
