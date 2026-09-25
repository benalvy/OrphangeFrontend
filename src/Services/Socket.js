import { io } from "socket.io-client"
import { serverURL } from './serverURL'

const socket = io(serverURL)

export default socket
