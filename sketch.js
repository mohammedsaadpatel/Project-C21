var wall,thickness;
var bullet,weight,speed;

function setup() {
  createCanvas(1200,300);

  speed = random (55,90);
  weight = random (400,900)
  thickness= random (22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  
  wall = createSprite(1000, 200, thickness, height/2);

  wall.shapeColor = (80,80,80) 
}

function draw() {
  background("black");  
  
  damage= 0.5*speed*speed*weight/thickness*thickness*thickness
  
  if (wall.isTouching(bullet)){
    bullet.velocityX=0

  if (damage<=10){
    wall.shapeColor="green";
  } 
  
  if (damage>10){
    wall.shapeColor="red";
  }
  }
  drawSprites();
}