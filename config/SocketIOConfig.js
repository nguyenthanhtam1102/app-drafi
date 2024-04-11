import {io as socketIO} from "socket.io-client";

const socket = socketIO("http://localhost:8082");

export default socket;