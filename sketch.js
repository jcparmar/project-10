var sea,ship;

var seaImg,shipImg;

var sun;

var bird;
 
var pirate

function preload(){
  //uncomment the code to add animation to ship 

 // movingship = loadAnimation("ship-1.png");
 // shipImg1 = loadAnimation("ship-1.png");
 // shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
 // shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
  
  sunImg = loadImage("sun-removebg-preview.png")
  

  birdImg = loadImage("bird-1.png")

  pirateImg = loadImage("pirate-1.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

  sun=createSprite(350,40);
  sun.addImage(sunImg);
  sun.scale = 0.3;

  bird= createSprite(340,90);
  bird.addImage(birdImg);
  bird.scale= 0.1;

  
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
   // sea.x = 0;
    //sea.x = sea.width;
   sea.x = sea.width/8;
    //sea.y = height;
  }

 bird.velocityX= -2

 if(bird.x < 0){
  

  bird.x = 340
  
 }


  drawSprites();
}