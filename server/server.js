const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected');

  // socket.emit from Admin text Welcome to the chat app
  // socket.broadcast.emit from admin text new user joined

  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin','new user joined'));

  socket.on('createMessage', (message)=>{
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from,message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});

server.listen(PORT, ()=>{
  console.log(`Started on port ${PORT}`);
});
