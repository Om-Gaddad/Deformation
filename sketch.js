var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2)

  speed = Math.round(random(45,60));
  weight = Math.round(random(1522,3000));
  
  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    
    var deformation = (0.5 * speed * speed)/22500 

    if(deformation > 180){
      car.shapeColor = color(250,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car,shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

  }




  drawSprites();
}
