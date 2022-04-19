var bg;
var ground;
var elsa,elsaImage;
var clouds,cloudsImage;




function preload(){
bg=loadImage("assets/bg 5.jpg");

elsaImage=loadImage("assets/elsa2.png");



}





function setup() {
  createCanvas(1000,600);
  ground=createSprite(300,300,2000,600);
  ground.addImage("ground",bg);
  ground.scale=2.6;
 ground.velocityX=-3;

 elsa=createSprite(50,100)
 elsa.addImage("elsa",elsaImage);
 elsa.scale=0.2;

}

function draw() {
  background(255,255,255);
  if (ground.x<0) {
    ground.x=ground.width/2;
  } 
  
  elsa.y=World.mouseY;
  drawSprites();
}