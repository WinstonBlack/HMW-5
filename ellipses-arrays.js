var x = [];
var y = [];
var ySpeed = [];
var colors = [];

function setup() {
	createCanvas(400, 400);

	for (var index = 0; index < 20; index = index + 1) {
		x[index] = 230;
		y[index] = 220;

		ySpeed[index] = 5;
		colors[index] = color(random(255), random(255), random(255))
	}
}

function draw() {
	background(0);
	noStroke();

	// draw pipe
	rect(0, 200, 220, 20);

	// draw drip
	for (var index = 0; index < 20; index = index + 1) {
		fill(colors[index]);
		ellipse(x[index],y[index],10);
		y[index] = y[index] + ySpeed[index];


		// down 3 pixels each frame, but maybe should be accelerating?
		y[index] = y[index] + 1

		// if invisible for a full “height” amount…

	}
}
