var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var Play = 1;
var End = 0;
var gameState = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  background("white");
  
  
  
  ground = createSprite(350,360,1200,30);
  ground.velocityX = -3; 
  
  monkey = createSprite(200,310,10,10);
  monkey.addAnimation("move",monkey_running);
  monkey.scale = 0.15;
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;
}


function draw() {
  background("white");
  
    if(ground.x <0 ){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -10;
  
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  monkey.collide(ground);
    bananasM();
    spawnObstacles();
  if(frameCount % 60 === 0){
  score = score + 1;
  }
  //score = score + Math.round(frameCount/60);
  
  text("Survival Time: " + score, 300, 30,);

drawSprites();  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,320,10,40);
  obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
  
}

function bananasM(){
    if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.17;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}






