import { io } from "socket.io-client";
const URL = "http://143.198.197.69:9010";

export const socket = io(URL);
