var car,wall
var speed, weight
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall= createSprite(1500,200,50,height/2)
 wall.shapeColour= colour(80,80,80)
speed= random(55,90);
wall= random(400,1500);

 car.velocityX=speed;
}

function draw() {
  background("black");  
  if(car.x-wall.x<(car.width+ wall.width)/2);
  car.velocityX=0
  var deformation = 0.5 *weight *speed *speed/22500

  if(deformation>180){
    car.shapeColour=colour("red")
  }

  if(deformation<180 && deformation>100){
    car.shapeColour=colour("yellow")}

    if( deformation<100){
      car.shapeColour=colour("green")} 
  drawSprites();

  
}