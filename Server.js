
//Code refrenced from Node website. Socket.Io website, Express Website and w3schools website
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');

var dbConnection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
  password : 'LionelMessi10',
  database : 'GameDB'
});



app.use('/F28WP-S1-DEHAB-master',express.static(__dirname + '/F28WP-S1-DEHAB-master'))
app.use('/JS',express.static(__dirname + '/JS'))
app.use('/CSS',express.static(__dirname + '/CSS'))

app.get('/', function (req, res){
  res.sendFile( '/Users/adithyasripada/Projects/WP/F28WP-S1-DEHAB-master/homePageWebsite.html');
 
});

app.get('/Game', function (req, res){
  res.sendFile( '/Users/adithyasripada/Projects/WP/F28WP-S1-DEHAB-master/GameWebsite.html');
});

app.get('/LoginSignUp', function (req, res){
  res.sendFile( '/Users/adithyasripada/Projects/WP/F28WP-S1-DEHAB-master/LoginSignUp.html');
});

app.get('/HowToPlay', function (req, res){
  res.sendFile( '/Users/adithyasripada/Projects/WP/F28WP-S1-DEHAB-master/Howtoplay.html');
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("You Are Connected to Database!");
});

