import random from Math;
var myPlayer;
function beginGame() {
    myWorld.begin();
    var min = 0;
    var max = 255;
    var myRed = Math.floor((Math.random() * 255) + 1);
    var myGreen = Math.floor((Math.random() * 255) + 1);
    var myBlue = Math.floor((Math.random() * 255) + 1);
    myPlayer = new component(50, 50, "rgb(myRed, myGreen, myBlue)", 100, 200);

}
var myWorld = {
    begin : function(){
        this.interval = setInterval(updatemyWorld, 20);
        window.addEventListener('keydown', function (e){
            myWorld.key = (myWorld.key || []);
            myWorld.key[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e){
            myWorld.key[e.keyCode] = false;
        })
    }
}
function setup(width, height, x, y){
    this.world = myWorld;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
    this.y = y;
    this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
    }
    
}
function updateGameArea() {
	myWorld.clear()
	myPlayer.speedX = 0;
    myPlayer.speedY = 0;

    if (myWorld.key && myWorld.key[65]) {myPlayer.speedX =
        -10; }
            if (myWorld.key && myWorld.key[68]) {myPlayer.speedX =
        10; }
            if (myWorld.key && myWorld.key [87]) {myPlayer.speedY =
        -10; }
            if (myWorld.key && myWorld.key [83]) {myPlayer.speedY =
        10; }
        myPlayer.newPos();
        
}