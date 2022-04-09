var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mushroom, obstacle; 
var mushroomImg, marioImg, shellImg, bg;

 function preload(){
   mushroomImg = loadImage("Images/mushroom.png");
   marioImg = loadAnimation("Images/running.png" , "Images/running2.png", "Images/running3.png");
   shellImg = loadImage("Images/shell.png");
   bg = loadImage("Images/mariobg.jpg");
 }

 function setup(){
   createCanvas(1920,950);

   mario = createSprite(100,740,40,20);
   mario.addAnimation("running", marioImg);
   mario.scale=0.20;

   mushroom = createSprite(400,600,40,20);
   mushroom.addImage(mushroomImg);
   mushroom.scale=0.25;

   var shell = createSprite (800,770,40,20);
        shell.addImage(shellImg);
        shell.scale=0.25
 }
function draw(){
   background(0);
   background(bg);
   drawSprites();
 }

 