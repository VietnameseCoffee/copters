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
    this.wall2 = new Brick(0, 0, 0, 1000, 10);
    this.bricks = init_bricks();


    this.alive = this.alive.bind(this);
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
    if (currentBrick.x < -5){
      this.bricks.shift();

      console.log(this.bricks)
      this.bricks.push(make_new_brick())
    } else {
      currentBrick.move(this.c);
      this.bricks[1].move(this.c);
    }


    this.wall.draw(this.c)
    this.wall2.draw(this.c)

    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      // boombooms
      // game over show score
    }
  }

  alive() {
    return (
      this.copter.safe(this.bricks[0]) &&
      this.copter.safe(this.bricks[1]) &&
      this.copter.safe(this.wall))
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }
}

// Global functions

const make_new_brick = () => {
  let randY = (Math.random() * 640);
  let randX = ((Math.random() * 400) + 1000);
  return (new Brick(randX, randY, 5, 30, 70))
};

const init_bricks = () => {
  const bricks = [];
  let i;
  for (i = 0; i < 5; i++) {
    bricks.push(make_new_brick());
  }
  console.log(bricks)
  return bricks;
}



// starting game code;

let g = new CoptersGame(c);
g.play();

let engine = null;

canvas.addEventListener('mousedown',() => {
  clearInterval(engine)
  engine = setInterval(() => g.lift(), 50)
})
canvas.addEventListener('mouseup',() => {
  clearInterval(engine);
  engine = setInterval(() => g.unlift(), 50)
})
