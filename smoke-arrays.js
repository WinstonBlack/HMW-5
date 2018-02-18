var x = [];
var y = [];
var r = [];
var multi = [];

function setup() {
  createCanvas(400, 400);

  for (var index = 0; index < 100; index = index + 1) {
    x[index] = 210;
    y[index] = 290;
    r[index] = 0;
		multi[index] = random(-10, 20);
 
  }
}

  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
for (var index = 0; index < 100; index = index + 1) {
  // save graphics state
  push();
  // darker as it gets closer to 0
  fill(y[index]);
  // rotate r around (x,y)
  translate(x[index], y[index]);
  rotate(r[index]);
  // draw rectangle
  rect(multi[index], multi[index], 20, 20);
  // reset rotation and translation
  pop();
  
  // up 3 pixels
  y[index] -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[index] += 0.05
  
  // if reach past the top a bunch
  if (y[index] < -150) {
    y[index] = 290;
  }
}
}
