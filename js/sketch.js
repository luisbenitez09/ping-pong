let r1x = 10;
let r1y = 10;

let r2x = 10;
let r2y = 10;

let bx = 10;
let by = 10;
let ball = new Ball(bx, by,20);

let p1;
let redPoints = 0;

let p2;
let bluePoints = 0;

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  p1 = new Player(10,(windowHeight/2)-30,15,60,"#0a66f0");
  p2 = new Player(windowWidth-30,(windowHeight/2)-30,15,60,"#d4080f");
}

function draw() {
  background("#1dad0a");
  stroke("#fff");
  line(windowWidth/2,20,windowWidth/2,windowHeight-20);

  ball.display();
  p1.display();
  p2.display();

}


function keyPressed() {
  console.log(keyCode);
  if (keyCode === 83 || keyCode === 87) p1.direction(keyCode);

  if (keyCode === 40) {
    p2.direction(83);
  } else if (keyCode === 38) {
    p2.direction(87);
  }
}
