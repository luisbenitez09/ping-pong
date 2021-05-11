class Player {
  constructor(x,y,w,h,c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c;
    this.stepY = 4;
  }

  display() {
    fill(this.c);
    rect(this.x,this.y,this.w,this.h);
    this.hasCollition();
    this.move();
  }

  direction(key) {
    console.log(key);
    if (key === 83) this.stepY = 4;
    else if(key === 87) this.stepY = -4;
    this.move();
  }

  move() {
    this.y += this.stepY;
  }

  hasCollition() {
    if(this.y <= 0) {
      this.stepY = 0;
    } else if (this.y + this.h >= windowHeight) {
      this.stepY = 0;
    }
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getW() {
    return this.w;
  }

  getH() {
    return this.h;
  }

}
