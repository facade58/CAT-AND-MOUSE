var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
function preload() {
  bgImg=loadImage("images/garden.png");
  catImg1=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png");
  catImg3=loadAnimation("images/cat3.png");
  catImg4=loadAnimation("images/cat4.png");
  
  mouseImg1= loadAnimation("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png");
  mouseImg3=loadAnimation("images/mouse3.png");
  mouseImg4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(600,400,50,80);
    cat.addAnimation(catImg1);
    cat.scale=0.2;
    mouse=createSprite(400,200,80,30);
    mouse.addAnimation(mouseImg1);
    mouse.scale=0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2) {
cat.velocityX=0;
cat.addAnimation(catImg4);
cat.changeAnimation("cat will stop");
cat.x=270;
cat.scale=0.3;

mouse.addAnimation(mouseImg3);
mouse.changeAnimation("mouse will stop");
mouse.scale=0.15;
}
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }
  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }

}


