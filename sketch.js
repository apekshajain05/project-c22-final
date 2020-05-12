
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground1;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 375);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
     ground1=new Ground(200,365,400,15);
     
}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX,mouseY,random(30,50),random(20,40)));

    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background("lightBlue");
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();

}
noStroke();
fill("lightGreen");
strokeWeight(3);
rectMode(CENTER);

ground1.display();


}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x,y,w,h ) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
        'restitution':0.8,
        'friction':1.0,
        
    }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);

    this.show = function () {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(300);
        stroke(125);
        strokeWeight(2);
        
        rect(0,0,this.w,this.h);
        pop();
    }
}