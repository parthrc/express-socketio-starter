import { server, io } from "./index";

// on IO connection
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // When socket disconnects
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(8000, () => {
  console.log("Server running on 8000");
});
