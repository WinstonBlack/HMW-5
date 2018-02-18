var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var colors = [];

function setup() {
  createCanvas(400, 400);

  for (var index = 0; index < 100; index = index + 1) {
    x[index] = 230;
    y[index] = 220;
    xSpeed[index] = random(1, 5);
    ySpeed[index] = random(1, 5);
    colors[index] = color(random(255), random(255), random(255))
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 220, 20);
  
  // draw drip
  for (var index = 0; index < 100; index = index + 1) {
    fill(colors[index]);
    ellipse(x[index], y[index], 10);
    x[index] = x[index] + xSpeed[index];
    y[index] = y[index] + ySpeed[index];

  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
  
  // if invisible for a full “height” amount…
 
}
}
