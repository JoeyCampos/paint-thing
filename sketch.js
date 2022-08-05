
var R, G, B;

let drawing = false;

let Color;

function preload() {
}

function setup() {
    colPic = createColorPicker("white"); 
    createCanvas(1000, 900,);
    noStroke();

    rectMode(CENTER);
}

function draw() {
background(0,0,0)
fill(255);
text("Scroll Down to get color Picker!", 10, 30);
if (drawing == false){
    input.value();

}



}
function mousePressed(){
    saveState();
    drawing = true;
    fill(colPic.color());
    ellipse(mouseX, mouseY, 20,20)
    input.value();
}

function mouseDragged(){
    drawing = true;
    fill(colPic.color());
    ellipse(mouseX, mouseY, 20,20);
    input.value();
}

function mouseReleased() {
    drawing = false;
}

function keyPressed(e) {
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