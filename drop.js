function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.xspeed = map(this.z, 20, 0, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.x = this. x + this.xspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;
    this.xspeed = this.xspeed + grav;

    if (this.y > height) {
      this.y = random(-500, -50);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0,191,255);
    line(this.x, this.y, this.x, this.y + this.len);
  };
}
