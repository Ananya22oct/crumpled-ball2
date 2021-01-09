
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rectangle1,rectangle2,rectangle3,bin,dustbinimage;

function preload()
{
	dustbinimage=loadImage("Images/dustbin.png");
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	paper=new Paper(150,300,20);
	paper.scale=2;
	ground=new Ground(600,380,1200,10);

	bin=createSprite(950,300,200,20);
	bin.addImage(dustbinimage);


	rectangle1 = new Dustbin(950, 350, 100, 20);
	rectangle2 = new Dustbin(900, 285, 20, 100);
	rectangle3 =new Dustbin(1000, 285, 20, 100);
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();
  
  rectangle2.display();
  rectangle3.display();
 rectangle1.display();


text("PRESS UP ARROW KEY TO THROW THE PAPER IN DUSTBIN",150,200);
fill("red");

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:18, y: -20})
	}
  }
