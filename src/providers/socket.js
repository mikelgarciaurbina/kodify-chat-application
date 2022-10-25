import io from 'socket.io-client';

let socket;

export const connect = async (userId) => {
  socket = io.connect('http://localhost:3000', {
    query: `userId=${userId}`,
  });
};

export const disconnect = () => {
  if (!socket) return;

  socket.disconnect();
  socket = null;
};

export const listen = (event, callback) => {
  if (!socket) return;

  socket.on(event, callback);
};

export const emit = (event, args) => {
  if (!socket) return;

  socket.emit(event, args);
};

export default {
  connect,
  disconnect,
  listen,
  emit,
};
