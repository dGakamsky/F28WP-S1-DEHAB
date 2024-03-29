var canvas = document.getElementById("gameCanvas");
var Obj = canvas.getContext("2d");

//starts spawning NPCs
generateNPC()
//iterathes through all the players 
//note: this will require the creation of an array of player characters 
for (i in players){
    //iterates through all the non player objects
    for (j in coins){
        //calls collision detection on all combinations of player and coins
        if (hitBox(i,j)){
            //increases player score
            i.score += 100
        }
    }
    for (j in mines){
        //calls collision detection on all combination of players and coins
        if (hitBox(i,j)){
            //decreases player score
            i.score -= 200
        }
    }
}