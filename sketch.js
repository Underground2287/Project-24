const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var paper;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,670,width,20);
    box1 = new Box(1300,665,170,20);
    box2 = new Box(1209,615,20,120);
    box3 = new Box(1395,615,20,120);
    paper = new Paper(200,450,40);

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    paper.display();

}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});

    }
}
