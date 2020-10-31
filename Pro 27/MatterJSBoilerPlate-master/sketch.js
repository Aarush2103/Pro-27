
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(350,50,400,200);
	 bobObject1 = new bob(350,750,30);
	 bobObject2 = new bob(380,750,30);
	 bobObject2 = new bob(410,750,30);
	 bobObject4 = new bob(440,750,30);
	 bobObject5 = new bob(470,750,30);

	 rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	 rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	 rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
	 rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	 rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
      
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:85,y:-85});
  
	}
}

