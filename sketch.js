var PREPLAY;
var PLAY;
var END;
var PREEND
var gameState = "PREPLAY";
var Invisible;
var bird, flappybird;
var gameover, goI
var poles, poles2;
var pipes, pipes2;
var polesG;
var Score = 0;

function preload(){
  
  pipes = loadImage("pipes1.png");
  pipes2 = loadImage("pipes2.png");
  flappybird = loadImage("flappy bird.png")
  goI = loadImage("download (1).png")
  
}

function setup(){
 createCanvas(400,400);
  
 back = createSprite(200,200,400,400);
 back.shapeColor = "lightblue";
 back.scale = 3;
 back.velocityX = -3;
  
 bird = createSprite(200,200,10,);
 bird.addImage(flappybird)
 bird.scale = 0.30;
 bird.velocityY = 6;
  
 Invisible = createSprite(200,400,400,0.5)
 Invisible.visible = false;
  
  polesG = createGroup();
    
 
}

function draw(){
  
 background("white");
  
  
  
  
  if (back.x < 100)
   {
     back.x = width/2;
   }
  
  if (gameState == "PREPLAY")
    {
      bird.velocityX = 0;
      bird.velocityY = 0;
      
      if (keyDown("space"))
        {
          gameState = "PLAY"
        }
    }
  
  if (gameState == "PLAY")
    {
      countScore();
      
      ran = Math.round(random(0.06, 50))
      rand = Math.round(random(350,460))
          
   if (keyWentDown("space"))
    {
      bird.velocityY = -3.5;
    }
  
  if (keyWentUp("space"))
    {
      bird.velocityY = 3;
    }
 
  spawnRandom();
      
      if (polesG.collide(bird))
        {
          gameState = "END"
        }
      
      if (bird.collide(Invisible))
        {
          gameState = "PREEND"
        }
      
  if (gameState == "END")
    {
      polesG.setVelocityEach(0);
      polesG.destroyEach();
      back.velocityX =  0;
      bird.velocityY = 9;
         }
      
  if (gameState == "PREEND")
    {
      polesG.setVelocityEach(0);
      polesG.destroyEach();
      back.velocityX =  0;
      bird.velocityY = 0;
      
          }
    }
  
  bird.setCollider("circle",0,0,72)
  bird.debug = false;
  
  drawSprites();
  
  if (gameState == "END"|| gameState == "PREEND")
    {
     textSize(20);
     fill("darkblue");
     textFont("Aharoni");
     text("You Survived " + Score + " Seconds" , 90, 200);
      text("Game Over" , 150, 175)
    }
  
  
}

function spawnUp()
{
  if (frameCount % 95 == 0)
    {
      poles = createSprite(400,ran); 
      poles.addImage(pipes)
      poles.scale = 0.5;
      poles.velocityX = -2;
      polesG.add(poles)
      
    }
  
  if (frameCount % 95 == 0)
    {
      poles2 = createSprite(400,ran+ 430); 
      poles2.addImage(pipes2)
      poles2.scale = 0.5;
      poles2.velocityX = -2;
      polesG.add(poles2);
    }
}

function spawnDown()
{
  if (frameCount % 95 == 0)
    {
      poles = createSprite(400,rand - 430); 
      poles.addImage(pipes)
      poles.scale = 0.5;
      poles.velocityX = -2;
      polesG.add(poles)
      
    }
  
  if (frameCount % 95 == 0)
    {
      poles2 = createSprite(400,rand); 
      poles2.addImage(pipes2)
      poles2.scale = 0.5;
      poles2.velocityX = -2;
      polesG.add(poles2);
    }
}

function spawnRandom()
{
  if (frameCount % 95 == 0)
    {
      rando = Math.round(random(1,4))
      switch(rando)
        {
          case 1: spawnUp();
                  break;
          case 2: spawnDown();
                  break;
          case 3: spawnDown();
                  break;
          case 4: spawnUp();
                  break;
        
        }
    }
}

function countScore()
{
  if (frameCount % 32 == 0)
    {
      Score = Score + 1
    }
}





