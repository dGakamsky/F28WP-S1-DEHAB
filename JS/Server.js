var express = require('express')();
var http = require('http').createServer(express);
var io = require('socket.io')(http);

express.get('/', function (req, res){
  res.sendFile( '/Users/adithyasripada/Projects/WP/F28WP-S1-DEHAB-master/GameWebsite.html');
});

http.listen(4040, function(){
  console.log('listening on *:4040');
});


