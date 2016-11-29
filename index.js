var express = require("express");
var app = express();
var path = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(msg){
  	socket.broadcast.emit("This is broadcast", msg);
  });

  socket.on('closed', function(msg){
    socket.broadcast.emit("closed", msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.listen(process.env.PORT || 3000, function(){
	console.log("Working");
});