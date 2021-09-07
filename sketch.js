const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0, 
		density:0.8

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(330, 250, 35, bob_options);
	bob2 = Bodies.circle(365, 250, 35, bob_options);
	bob3 = Bodies.circle(400, 250, 35, bob_options);
	bob4 = Bodies.circle(435, 250, 35, bob_options);
	bob5 = Bodies.circle(470, 250, 35, bob_options);
	World.add(world, bob1);
	World.add(world, bob2);
	World.add(world, bob3);
	World.add(world, bob4);
	World.add(world, bob5);

	rope1= new rope(bob3, roof, 0, 0);
	rope2 = new rope(bob2, roof, -35, 0);
	rope3 = new rope(bob4, roof, 35, 0);
	rope4 = new rope(bob1, roof, -70, 0);
	rope5 = new rope(bob5, roof, 70, 0);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x, bob1.position.y, 35, 35);
  ellipse(bob2.position.x, bob1.position.y, 35, 35);
  ellipse(bob3.position.x, bob1.position.y, 35, 35);
  ellipse(bob4.position.x, bob1.position.y, 35, 35);
  ellipse(bob5.position.x, bob1.position.y, 35, 35);

  
 
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW){
	  console.log("r");
	  Body.applyForce(bob5, bob1.position, {x:5, y:0});
	}
  }

















