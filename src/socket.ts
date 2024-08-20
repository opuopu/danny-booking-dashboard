import { io } from "socket.io-client";
const URL = "https://socket.mamnon.de";

export const socket = io(URL);
