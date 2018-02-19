var x = [];
var y = [];
var d = [];
var colors = [];


function setup() {
	createCanvas(400, 400);

	for (var index = 0; index < 50; index = index + 1) {
		x[index] = random(150,250);
		y[index] = random(0,400);
		d[index] = random(5, 20);
		colors[index] = color(random(255), random(255), random(255))


	}
}

function draw() {
	background(0);
	noStroke();

	for (var index = 0; index < 50; index = index + 1) {
		fill(colors[index]);
		ellipse(x[index], y[index], d[index]);

		// 1% of the time
		if (random() < 0.01) {
			// random diameter between 10 and 400
			d[index] = random(10, 40);
		}

	}
}
