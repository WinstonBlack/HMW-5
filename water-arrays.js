var x = [];
var y = [];
var ySpeed = [];
var colors = [];

function setup() {
	createCanvas(400, 400);

	for (var index = 0; index < 25; index = index + 1) {
		x[index] = random(225, 240);
		y[index] = 220;

		ySpeed[index] = random(3, 6);
		colors[index] = color(random(200), random(200), random(100))
	}
}

function draw() {
	background(0);
	noStroke();

	// draw pipe
	fill('white')
	rect(0, 200, 220, 20);

	// draw drip
	for (var index = 0; index < 25; index = index + 1) {
		fill(colors[index]);
		ellipse(x[index],y[index],10);
		y[index] = y[index] + ySpeed[index];
		
		 if (y [index] > height) {
    // reset
    y[index] = 220;
		 x[index] = random(225, 240);
  }
}
	 
}
