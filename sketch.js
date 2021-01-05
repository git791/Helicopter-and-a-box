var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground, boxP1, boxP2, boxP3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxP1 = createSprite(400, 650, 200, 20,  {isStatic:true});
	boxP1.shapeColor = "red";
	boxP2 = createSprite(300,610, 20, 100,  {isStatic:true});
    boxP2.shapeColor = "red";
	boxP3 = createSprite(500, 610, 20, 100,  {isStatic:true});
    boxP3.shapeColor = "red";

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//boxP1 = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	//World.add(world, boxP1);
	//boxP2 = Bodies.rectangle(300, 600, 20, 100, {isStatic:true} );
    //World.add(world, boxP2);
	//boxP3 = Bodies.rectangle(500, 600, 20, 100, {isStatic:true} );
	//World.add(world, boxP3 );
	
	boxP1.depth = boxP1.depth-4;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody, false);
    
  }
}



