var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(200,200,75,25);
  bullet.shapeColor = "black";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background("grey");
  bullet.velocityX = speed;

  if(wall.isTouching(bullet)){
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    bullet.velocityX = 0;
    if(damage > 10){
      wall.shapeColor = "red";
    }
    if(damage <= 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}