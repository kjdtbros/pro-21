var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1000,300);

  bullet = createSprite (50,150,30,10);
  wall=createSprite(800,150,thickness,height/2); 

  speed=random(223,321);
  weight=random(50,72);
 thickness=random(22,63);

  bullet.velocityX=speed;
}
function draw() {
  background("black");  

  bullet.shapeColor=color("80,80,80");
  wall.shapeColor=color("80,80,80");

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
    var deformation = 0.5 *weight *speed *speed/22500;
    if(deformation>100){
     wall.shapeColor=color(255,0,0);
    }
    if(deformation < 100 && deformation>100){
      wall.shapeColor=color(230,230,0);
    }
    if(deformation < 100){
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();

}

