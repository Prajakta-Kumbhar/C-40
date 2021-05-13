var database;
var playerCount, gameState;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var cars = []
var car1_image, car2_image, car3_image, car4_image,track_image

function preload()
{
  car1_image = loadImage("images/car1.png")
  car2_image = loadImage("images/car2.png")
  car3_image = loadImage("images/car3.png")
  car4_image = loadImage("images/car4.png")
  track_image = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(windowWidth - 40,windowHeight - 20);

    database = firebase.database();
   game = new Game()
   game.getState()
   game.startGame()
}

function draw(){
    background("white");
   
    if(playerCount === 4)
    {
      game.updateState(1)    
    }
    if (gameState === 1)
    {
        game.play()
    }
    if (gameState === 2)
    {
        game.end()
    }
     
}

