import express from "express";
import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();

const app = express();

app.get("/notify-client", (req, res) => {
  eventEmitter.emit("notify-client", {
    message: "Alguem acessou a /notify-client",
    date: new Date(),
  });

  return res.end();
});

app.get("/sse-events", (req, res) => {
  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    Connection: "keep-alive",
  };
  res.writeHead(200, headers);
  console.log("nova conexão SSE");

  eventEmitter.on("notify-client", (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });
});

app.listen(3003).on("listening", () => console.log("rodando na 3003"));
