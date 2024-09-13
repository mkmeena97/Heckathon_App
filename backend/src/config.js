import { Server } from 'socket.io';


/**
 * Initializes a socket server
 * 
 * @param {any} server - Server to be initialized
 */
const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Replace this with your client's origin or an array of allowed origins
      methods: ["GET", "POST"],
    },
  });

  /* Establishes connection with the socket */
  io.on("connection", (socket) => {
    console.log("User connected");

    /* Handle socket events */
    chatSockets(socket);

    /* Handle user disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

// Named exports
export  default initSocket ;
