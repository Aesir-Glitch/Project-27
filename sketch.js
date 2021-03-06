
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(100,40,100,50);
	roof2 = new Roof(200,40,100,50);
	roof3 = new Roof(300,40,100,50);
	roof4 = new Roof(400,40,100,50);
	roof5 = new Roof(500,40,100,50);

	bobObject1 = new Bob(100,240,100,100);
	bobObject2 = new Bob(200,240,100,100);
	bobObject3 = new Bob(300,240,100,100);
	bobObject4 = new Bob(400,240,100,100);
	bobObject5 = new Bob(500,240,100,100);

	rope1 = new Rope(bobObject1.body,roof1.body);
	rope2 = new Rope(bobObject2.body,roof2.body);
	rope3 = new Rope(bobObject3.body,roof3.body);
	rope4 = new Rope(bobObject4.body,roof4.body);
	rope5 = new Rope(bobObject5.body,roof5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  text("Press the up-arrow then the down-arrow to move the left bob",150,550); 
  
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  
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
 
  upkeyPressed();
  downkeyPressed();
  
  drawSprites();
 
}
function upkeyPressed() {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:50})
	}
  }
 
  function downkeyPressed() {
	if (keyCode === DOWN_ARROW){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:-50})
	}
  }  