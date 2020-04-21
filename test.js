var balls = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (var i = 0; i < 5; i++) {
        balls[i] = new Meteor();
    }
}
function draw() {
    background(255);
    for (i = 0; i < 5; i++) {
        balls[i].update();
        balls[i].show();
    }
}
function Meteor() {
    this.x = random(width);
    this.y = random(height);
    this.xspeed = 3;
    this.yspeed = 3;
    this.update = function () {
        if (this.x > width || this.x < 0) { this.xspeed *= -1; }
        if (this.y > height || this.y < 0) { this.yspeed *= -1; }
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    this.show = function () {
        push();
        fill(255, 153, 0);
        ellipse(this.x, this.y, 8, 8);
        pop();
    }
}

function mousePressed() {
    for (i = 0; i < balls.length; i++) {
        if (Math.sqrt((Math.pow(mouseX - balls[i].x, 2)) + (Math.pow(mouseY - balls[i].y, 2))) < 10) {
            balls[i].xspeed = 0;
            balls[i].yspeed = 0;
        }
    }
}
