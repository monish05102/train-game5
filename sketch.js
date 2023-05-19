var path,train, leftBoundary,rightBoundary;
var pathImg,trainImg;
var i;

function preload(){
  pathImg = loadImage("track.jpg");
  trainImg = loadImage("train.png");
}

function setup(){
  
  createCanvas(840,655);
  push(); 
// Moving background
path=createSprite(420,300,50,50);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=4.3;


imageMode("CENTER");
pop();

//creating boy running
train = createSprite(180,340,30,30);
train.scale=0.7;
train.addImage("train",trainImg);
  
// create left Boundary
leftBoundary=createSprite(80,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(735,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  train.x = World.mouseX;
  
  edges= createEdgeSprites();
  train.collide(edges[3]);
  train.collide(edges[1]);
  train.collide(leftBoundary);
  train.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
