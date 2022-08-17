const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,30,ball_options);
	World.add(world,ball);
	ball.shapeColor = "yellow"

	groundObj = new Ground(width/2,670,width,20)

	rightSide = new Ground(1150,600,20,120);

	leftSide = new Ground(950,600,20,120);

  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);

	leftSide.display();
	rightSide.display();
	groundObj.display();
  
	ellipse(ball.position.x,ball.position.y,30);
	ellipseMode(CENTER)

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:190,y:-190});
	}
}