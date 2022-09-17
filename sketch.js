
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, flappy_options, world, flappy;

function preload() {
  flappyImage = loadImage("flappy.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  flappy_options = {
    restitution : 2
  }

  flappy = Bodies.circle(200, 100, 20, flappy_options)
  World.add(world, flappy)
}


function draw() 
{
  background(51);
  imageMode(CENTER)
  image(flappyImage, flappy.position.x,flappy.position.y, 100, 100)
  
  if (keyIsDown(32)) {
    flappyJump()
  }

  Matter.Body.setVelocity(flappy, {x:3, y:2})

if (flappy.y < 20) {
    World.remove(world, flappy)
  }

  Engine.update(engine);
  
}

function flappyJump() {
  Matter.Body.applyForce(flappy, {x:0, y:0}, {x:0, y:-0.1})
}