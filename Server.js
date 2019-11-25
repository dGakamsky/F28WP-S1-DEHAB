var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()
const router = express.Router()

app.use(bodyParser.json())

app.use(expressValidator())

app.use('/api', router)

router.post(
  '/',
  Controller.validate('createUser'),
  Controller.createUser,
)



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


http.listen(5050, function(){
  console.log('listening on *:5050');
});




