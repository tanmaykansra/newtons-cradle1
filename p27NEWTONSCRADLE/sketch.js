const Constraint = Matter.Constraint;//1
const Engine = Matter.Engine;
const Render=Matter.Render
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1 , ball2 , ball3, ball4 , ball5
var chain1, chain2 , chain3 , chain4 , chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball1_options = {
		'restitution':1.0,
		'friction':1.0,
		'density':0.2
	}
    ball1 = Bodies.circle(400,300,40,ball1_options)
	World.add(world, ball1)
// ball2
	var ball2_options = {
		'restitution':1.0,
		'friction':1.0,
		'density':0.2
	}
    ball2 = Bodies.circle(500,300,40,ball2_options)
	World.add(world, ball2)

  //ball3
  var ball3_option = {
	'restitution':1.0,
	'friction':1.0,
	'density':0.8

  }
  ball3 = Bodies.circle(540,300,40,ball3_option)
  World.add(world, ball3)

  //ball4
  var ball4_option ={ 
	  'restitution':1.0,
	   'friction':1.0,
	   'density':0.8
  } 
  ball4 = Bodies.circle(580,300,40,ball4_option)
  World.add(world , ball4)
	//chain1
	var chain1_option = { //2
		bodyA :  ball1 ,
	 // bodyB : log6.body,
		pointB: {x:250 , y:400},
		length : 150, 
		stifness : 1
 
	}

	chain1 =  Constraint.create(chain1_option); //3
	World.add (world,chain1)//3
//chain2
	var chain2_option = { //2
		bodyA :  ball2 ,
	 // bodyB : log6.body,
		pointB: {x:350 , y:400},
		length : 150, 
		stifness : 1
 
	}
	 
	
	chain2 =  Constraint.create(chain2_option); //3
	World.add (world,chain2)//3
  
	var chain3_option = { //2
		bodyA :  ball3 ,
	 // bodyB : log6.body,
		pointB: {x:450 , y:400},
		length : 150, 
		stifness : 1
 
	}
	chain3 =  Constraint.create(chain3_option); //3
	World.add (world,chain3)//3



	var chain4_option = {
		bodyA : ball4,
		pointB: {x:550 , y:400},
		length :150,
		stifness: 1

	}  
	 
	 chain4 = Constraint.create(chain4_option)  
    World.add ( world,chain4)

	
	Engine.run(engine);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1000, height: 700, wireframes: false } }); Render.run(render);
}
function mouseDragged(){ Matter.Body.setPosition(ball1, {x: mouseX , y: mouseY}); }


function draw() {
  rectMode(CENTER);
  background("white");
  circle(ball1.position.x,ball1.position.y,80)
  circle(ball2.position.x,ball2.position.y,80)
  circle(ball3.position.x,ball3.position.y,80)
  circle(ball4.position.x,ball4.position.y,80)
  push()
  strokeWeight(7)
   line(ball1.position.x,ball1.position.y,250,200)//5
   line(ball2.position.x,ball2.position.y,350,200)//5
   line(ball3.position.x,ball3.position.y,450,200)
   line(ball4.position.x,ball4.position.y,550,200)
  pop()
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
 
}

function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball1,ball1.position,{x:-100,y:-45}); } }

