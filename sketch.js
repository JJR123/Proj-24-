var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground; 
var d1,d2,d3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new Paper;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	ground= new Ground;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	d1=new Dustbin(700,200,20,70); 
	//d2=new Dustbin(700,200,20,70); 
	//d3=new Dustbin(700,200,20,70); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageBody.display(); 
  ground.display(); 
  d1.display();
  keyPressed();
  
 
}
function keyPressed(){ 
	if(keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperObject.body.position,{x:85,y:-85}); 
	}
	
}

 