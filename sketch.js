const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = engine.create();
  world = engine.world;

  //level three
  box1 = new Bluebox(330,235,30,40);
  box2 = new Bluebox(360,235,30,40);
  box3 = new Bluebox(390,235,30,40);
  box4 = new Bluebox(420,235,30,40);
  box5 = new Bluebox(450,235,30,40);
  //level two
  box6 = new Greenbox(360,195,30,40);
  box7 = new Greenbox(390,195,30,40);
  box8 = new Greenbox(420,195,30,40);
  //level one
  box9 = new Pinkbox(390,155,30,40);
  
  //ground1
  ground1 = new Ground(400,390,800,20);

  ball = new Ball(0,0,50);

  spring = new Slingshot(ball.body,{x:200,y:200});

}

function draw() {
  background("black");
  Engine.update(engine);  

  debug:true;
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground1.display();
  ball.display();
  spring.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}