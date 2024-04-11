import {io, io as socketIO} from "socket.io-client";

const socket = socketIO("http://localhost:8082");
export const notificationSocket = io("http://localhost:8081");

export default socket;