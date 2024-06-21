import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import path from "path";

require("dotenv").config();

const app = express();
// Create a new hhtp server
const server = createServer(app);
// Attach server to socket
const io = new Server(server);

app.use(
  cors({
    credentials: true,
  })
);

// Specifying path from to serve files
app.use(express.static(path.resolve("./src")));

app.get("/", (req, res) => {
  return res.sendFile("./index.html");
});

export { server, io };
