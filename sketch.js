const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;// make objects
const Body = Matter.Body;//properties 

var engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;



  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
  tower = new Tower(60, 350, 85,500);
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//display tower(challenge 4)
tower.display();
 
}

