class Ball {
  constructor(x,y,d) {
    this.x = x
    this.y = y
    this.d = d
    this.c = "#a9ff30";
    this.stepX = 4;
    this.stepY = 2;
  }

  display() {
    fill(this.c);
    circle(this.x,this.y,this.d);
    this.hasCollition();
    this.bounce();
    this.move();
  }

  move() {
    this.x += this.stepX;
    this.y += this.stepY;
  }

  bounce() {
    if (this.x <= p1.getX()+p1.getW() && this.y >= p1.getY() && this.y <= p1.getY()+p1.getH()) {
      this.stepX = 2
    } else if (this.x >= p2.getX() && this.y >= p2.getY() && this.y <= p2.getY()+p2.getH()) {
      this.stepX = -2;
    }
  }

  hasCollition() {
    if(this.y - this.d/2 <= 0) {
      this.stepY = 2;
    } else if (this.y + this.d/2 >= windowHeight) {
      this.stepY = -2;
    } else if (this.x + this.d/2 <= 0 ) {
      redPoints++;
      alert("Punto para jugador rojo! - Puntaje: Rojo: " + redPoints + " - Azul: " + bluePoints);
      //refresh
      this.stepX = 2;
    } else if (this.x + this.d/2 >= windowWidth) {
      bluePoints++;
      alert("Punto para jugador azul! - Puntaje: Rojo: " + redPoints + " - Azul: " + bluePoints);
      //refresh
      this.stepX = -2;
    }
  }

}
