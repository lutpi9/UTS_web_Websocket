const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');

  socket.on('message', msg => {
    console.log('Received:', msg);
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});