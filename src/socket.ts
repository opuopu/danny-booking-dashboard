import { io } from "socket.io-client";
const URL = "http://103.145.138.74:9000";

export const socket = io(URL);
