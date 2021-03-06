var x = [];
var y = [];
var r = [];
var ySpeed = [];
var xSpeed = [];




function setup() {
	createCanvas(400, 400);
	colorMode(HSB);

	for (var index = 0; index < 100; index = index + 1) {
		x[index] = 210;
		y[index] = 290;
		r[index] = 0;
		ySpeed[index] = random(1,5)
		xSpeed[index] = random(-2,2)
	


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
		
		 rect(-10, -10, 20, 20);
		// reset rotation and translation
		pop();

		// up 3 pixels
		y[index] -= ySpeed[index];
		x[index] += xSpeed[index];

		// rotate 0.05 radians ~= 2.8 degrees per frame
		r[index] += 0.05

		// if reach past the top a bunch
		if (y[index] < -150) {
			y[index] = 290;
			x[index] = 210;
		}
	}
}
