
var R, G, B;

let drawing = false;

let Color;

function preload() {
}

function setup() {
    createCanvas(1000, 900,);
    noStroke();

    rectMode(CENTER);
/*
    ar = createInput();
    ar.position(420, 120);
    ar.size(50);
    fill(255,255,255);
    text("R", 80, 58);
    
    ge = createInput();
    ge.position(420, 150);
    ge.size(50);
    fill(255,255,255);
    text("G", 80, 88);
    
    be = createInput();
    be.position(420, 180);
    be.size(50);
    fill(255,255,255);
    text("B", 80, 118);

    button = createButton('Change Color');
    button.position(420, 210);
    button.mousePressed(rgb);
*/
    function rgb(){
        var R = ar.value()
        var G = ge.value()
        var B = be.value()
        fill(R.value, G.value, B.value);
    }
}

function draw() {
background(0,0,0)

fill(255);
text("Color Changing Coming Soon", 10, 30);
/*
fill(255,255,255);
text("R", 80, 58);

fill(255,255,255);
text("G", 80, 88);

fill(255,255,255);
text("B", 80, 118);
*/
if (drawing == false){
    input.value();

}



}
function mousePressed(){
    saveState();
    drawing = true;
    fill(ar,ge,be)
    ellipse(mouseX, mouseY, 20,20)
    input.value();
}

function mouseDragged(){
    drawing = true;
    ellipse(mouseX, mouseY, 20,20);
    input.value();
}

function mouseReleased() {
    drawing = false;
}

function rgb(){
new color(ar.value(),ge.value(),be.value())
}

for (let i = 0; i < ballArray.length; i++) {
    fill(color[i].redValue, color[i].greenValue, color[i].blueValue);
}

class color {
    constructor(R,G,B){
        this.redValue = R
        this.greenValue = G
        this.blueValue = B
    }
}

function keyPressed(e) {
    // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
    if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
      undoToPreviousState();
    }
  }
  
  function undoToPreviousState() {
    if (!previousState) {
      return;
    }
    background(0);
    image(previousState, 0, 0);
    previousState = null;
  }
  
  
  function saveState() {
    previousState = get();
  }