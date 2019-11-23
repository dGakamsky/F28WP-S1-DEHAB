//determines the area within which the generator can spawn objects
var areaWidth ;
var areaHeight ;

//timer, im milliseconds
var interval =5000;
//list of all non player characters
var NPC = [];
//dimentions for the coin object
var coinWidth=50;
var coinHeight=50;
//dimentions for the mine object
var mineWidth=30;
var mineHeight=30;



//general generator function, will call the others and serve as the "main" function
function generateNPC(){
    spawnCoin()
    spawnMine()
}

//spawns a coin
function spawnCoin(){
    //generates the random co-ordinates for the spawn
    var xPos = Math.floor(Math.random() * (areaWidth- coinWidth)) + 1;
    var yPos = Math.floor(Math.random() * (areaHeight-coinHeight)) + 1;
    //creates the new object
    var newCoin = new component(coindWidth, coinHeight, "yellow", xPos, yPos);
    //adds the new object to the list of NPC's
    NPC.push(newCoin)
}

//spawns a mine, functions the same as the coin spawner
function spawnMine(){
    var xPos = Math.floor(Math.random() * (areaWidth - mineWidth)) + 1;
    var yPos = Math.floor(Math.random() * (areaHeight - mineHeight)) + 1;
    var newMine = new component(mineWidth, mineHeight, "red", xPos, yPos);
      NPC.push(newMine)
}

    