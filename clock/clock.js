let width = 800;
let height = 800;

function setup() {
  createCanvas(width, height);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 700, 700, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 650, 650, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 760, 760, 0, hourAngle);
}
//   // blinking stars
//   var galaxy = {
//     locationX : random(800),
//     locationY : random(800),
//     size : random(1,6)
//   }
//   ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
//   ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
// }
  // push();
  // rotate(secondAngle);
  // stroke(255, 100, 150);
  // line(0, 0, 100, 0);
  // pop();
  //
  // push();
  // rotate(minuteAngle);
  // stroke(150, 100, 255);
  // line(0, 0, 75, 0);
  // pop();
  //
  // push();
  // rotate(hourAngle);
  // stroke(150, 255, 100);
  // line(0, 0, 50, 0);
  // pop();
  //
  // stroke(255);
  // point(0, 0);

  //  fill(255);
  //  noStroke();
  //  text(hr + ':' + mn + ':' + sc, 10, 200);
