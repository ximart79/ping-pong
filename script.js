// Declare your variables here

// Runs once before setup()
function preload() {

}

// Runs once before draw()
function setup() {
  createCanvas(400, 400) // width, height of screen
}


// Runs in a loop forever
function draw() {
  background(200)

  
  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(80, 100, 100, 200, 10);
  ellipse(200, 200, 50) // draw an ellipse
}

