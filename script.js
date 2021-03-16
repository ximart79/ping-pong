// Declare your variables here
let x = 100
let y = 200
let r = 100
let v = 200

let img;
let ball;
let ballsprite;
// Runs once before setup()
function preload() {
img = loadImage("cartoon.png")
ball = loadImage("ball.png")
}

// Runs once before draw()
function setup() {
  createCanvas(400, 400) // width, height of screen
ballsprite = createSprite(200, 200)
  ballsprite.addImage(ball)
ballsprite.friction = 0
ballsprite.setSpeed(-2,0)
}


// Runs in a loop forever
function draw() {
  background(50)

  if(keyIsDown(68)) {
    y += 1
  }

  if(keyIsDown(65)) {
    y -= 1
  
  }
  if(keyIsDown(38)) {
    r += 1
  }

  if(keyIsDown(40)) {
    r -= 1
  
  }
  // Draw a rectangle with rounded corners, each having a radius of 20.
  // draw an ellipse
  image(img, 0, r,150,150)
  image(img, 350, y,150,150)
  drawSprites() // draw all sprites in the game
//ellipse(x, y, 50)
}
ball.bounce(img) // activate bouncing physics


