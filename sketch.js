
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ham,rub,one;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	one = new stone(500,600);
	ham = new Hammer(100,100);
	rub = new rubber(200,300);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ham.display();
  rub.display();
  one.display();
  
  drawSprites();
 
}



