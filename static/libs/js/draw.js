let ampiezza = 50;
let frequenza = 0.5;
let fase = 0;
let angle = 0;
let increment = 0.005;
let w = 400;
let h = 400;

function reset() {
	angle = 0;
	background(220);
	stroke(0, 0, 0);
	line(0, 200, 400, 200);
}

function clearPhase() {
	background(220);
	stroke("grey");
	line(0, 200, 400, 200);
}

function setup() {
	createCanvas(400, 400);
	background(220);
	line(0, 200, 400, 200);
	
}

function draw() {
	let x = map(angle, 0, 2 * PI, 0, 400);
	let y = ampiezza * sin(2 * PI * frequenza * angle + fase);
	stroke(0, 0, 255);
	strokeWeight(3);
	point(x, y + h / 2);
	let y2 = ampiezza * cos(2 * PI * frequenza * angle + fase);
	stroke(255, 0, 0);
	strokeWeight(3);
	point(x, y2 + h / 2);
	angle += increment;

	if (x >= 400) {
		reset();
	}
}
