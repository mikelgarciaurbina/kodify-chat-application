const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('chat_message', (msg) => {
    io.emit('chat_message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
