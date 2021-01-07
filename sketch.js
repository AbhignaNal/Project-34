const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var canvas, mConstraint;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  
  pendulum1 = new Pendulum(40, 200, "#00b0ff");
  pendulum2 = new Pendulum(80, 200, "#e91e63");
  pendulum3 = new Pendulum(120, 200, "#ffc107")
  pendulum4 = new Pendulum(160, 200, "e91e63");
  pendulum5 = new Pendulum(200, 200, "00b0ff");

  sling1 = new Sling(pendulum1.body, {x: 40, y: 50});
  sling2 = new Sling(pendulum2.body, {x: 80, y: 50});
  sling3 = new Sling(pendulum3.body, {x: 120, y: 50});
  sling4 = new Sling(pendulum4.body, {x: 160, y: 50});
  sling5 = new Sling(pendulum5.body, {x: 200, y: 50});

  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}