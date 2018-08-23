import Helicopter from './helicopter';
import Brick from './brick';

const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 640;
const c = canvas.getContext('2d');


class CoptersGame {

  constructor(c) {
    this.c = c;
    this.copter = new Helicopter(150, 100, 0);
    this.wall = new Brick(0, 630, 0, 1000, 10);
    this.bricks = this.make_bricks();



    this.animate = this.animate.bind(this);
    this.lift = this.lift.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    let currentBrick = this.bricks[0];
    this.c.clearRect(0,0, 1000, 640);
    this.copter.move(this.c);
    console.log(currentBrick.x < 5)
    if (currentBrick.x < 5){
      this.bricks.shift();

      console.log(this.bricks)
      console.log(this.bricks)
      this.bricks.push(x)
    } else {
      currentBrick.move(this.c);
    }


    this.wall.draw(this.c)
    if ((this.copter.safe(currentBrick) && this.copter.safe(this.wall))) {
      requestAnimationFrame(this.animate);
    } else {
      // boombooms
      // game over show score
    }
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }

  init_bricks() {
    const bricks = [];
    let i;
    for (i = 0; i < 5; i++) {
      (function() {
        let randY = (Math.random() * 640)
        bricks.push(new Brick(1050, randY, 5, 30, 70))
      })();
    }
    return bricks;
  }

  make_new_brick
}

let engine = null;


let g = new CoptersGame(c);
g.play();

// canvas.addEventListener('click', () => g.lift())


canvas.addEventListener('mousedown',() => {
  clearInterval(engine)
  engine = setInterval(() => g.lift(), 50)
})
canvas.addEventListener('mouseup',() => {
  clearInterval(engine);
  engine = setInterval(() => g.unlift(), 50)
})
