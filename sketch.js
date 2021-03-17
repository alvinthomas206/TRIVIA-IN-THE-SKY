var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var aeroplane1,aeroplane2;
var players;
var passengers;
var passengersGroup;
var fuels;
var fuelGroup;
var bird_img;
var bird1_img;
var bird2_img;
var birds;
var birdsGroup;
var passenger_img, fuel_img
var player_img;
var invisibleGround;
var invisibleGround2;
var fire_img;
var wall;
var wall2;
var wall3;
var wall4;
var win;
var aliens;
var alien_img;
var aliensGroup;
var bullet;
var bullet_img;
var bulletGroup ;
var missile;
var missile_img;
var missileGroup;
var upboder;
var downboder;
var last_img
function preload(){
  back_img = loadImage("images/sky.png");
  player_img = loadImage("images/airplane.png");
  passenger_img = loadImage("images/passenger.png");
  fuel_img = loadImage("images/fuel.png");
  bird_img= loadImage("images/bird.png");
  bird1_img= loadImage("images/bird1.png");
  bird2_img= loadImage("images/bird2.png");
  fire_img= loadImage("images/airplane1.png");
  alien_img= loadImage("images/alien.png");
  bullet_img= loadImage("images/bullet.png");
  missile_img= loadImage("images/missile.png");
  last_img=loadImage("images/1.png")



  passengersGroup = new Group();
  fuelsGroup = new Group();
  birdsGroup = new Group();
  aliensGroup = new Group();
  bulletGroup = new Group();
  missileGroup = new Group();
}
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
 
  database = firebase.database();
  
  

  game = new Game();

  game.getState();

  game.start();
 
}

function draw() {

 
  
   if (playerCount === 2) {
     game.updateState(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   if (gameState === 3) {
    
    game.win();
  }


   

}

