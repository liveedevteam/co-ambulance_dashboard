import { io } from "socket.io-client"

const connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
}

const socket = io(process.env.REACT_APP_API_URL, connectionOptions)

export function socketInit() {
    return socket
}

