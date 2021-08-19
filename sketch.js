//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var bgImg;

function preload(){
  bgImg = loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1200,400);
 
  //creating a new engine
  engine = Engine.create();

  //creating the world using the engine
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  //bottom row
  box1 = new Box(700,320);
  box2 = new Box(920,320);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);
 
  //middle row
  box3 = new Box(700,240);
  box4 = new Box(920,240);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);

  //top row 
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  box5 = new Box(810,160);

  bird1 = new Bird(100,100);
}

function draw() {
  background(bgImg);
  
  Engine.update(engine);

  ground.display();

  //display the bottom row
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  //display the middle row
  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  //display the top row
  box5.display();
  log3.display();
  log4.display();
  
  bird1.display();
}