function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 200, 50, 50);
  rect1=createSprite(50, 100, 50, 50);
  rect2=createSprite(750, 100, 50, 50);
  rect1.velocityX=5;
  rect2.velocityX=-5;
 rect1.shapeColor="blue";
 rect2.shapeColor="yellow";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 if (istouching(movingrect,fixrect)){
  movingrect.shapeColor="red";
fixrect.shapeColor="red";
 }
 else{
  movingrect.shapeColor="green";
  fixrect.shapeColor="green";
 }
 bounceoff(rect1,rect2);


  drawSprites();
}


   

