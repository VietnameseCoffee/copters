import Helicopter from './helicopter';
import Brick from './brick';

const canvas = document.getElementById("canvas");
canvas.width = 900;
canvas.height = 580;
const c = canvas.getContext('2d');


class CoptersGame {

  constructor(c) {
    this.c = c;
    this.copter = new Helicopter(250, 100, 0);
    this.wall = new Brick(0, 560, 0, 1000, 20);
    this.wall2 = new Brick(0, 0, 0, 1000, 20);
    this.bricks = init_bricks();
    this.score = 0;


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

    c.font="28px robot";
    c.fillText(`Score: ${this.score}`, 50, 50)

    this.copter.move(this.c);

    if (currentBrick.x < -5){
      this.bricks.shift();

      console.log(this.bricks)
      this.bricks.push(make_new_brick())
    } else {
      currentBrick.move(this.c);
      this.bricks[1].move(this.c);
    }

    this.wall.draw(this.c);
    this.wall2.draw(this.c);

    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      // boombooms
      // game over show score
    }
  }


  alive() {
    this.score = this.score + 1;
    console.log(this.score);
    return (
      this.copter.safe(this.bricks[0]) &&
      this.copter.safe(this.bricks[1]) &&
      this.copter.safe(this.wall2) &&
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
  let randY = (Math.random() * 580);
  let randX = ((Math.random() * 400) + 1000);
  return (new Brick(randX, randY, 7, 50, 90))
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



// starting game code, block scoped;
{

let g = new CoptersGame(c);

const play = () => {
  g.play();

  canvas.addEventListener('mousedown',() => {
    clearInterval(engineOn)
    engine = g.lift()
  })
  canvas.addEventListener('mouseup',() => {
    clearInterval(engineOn);
    engine = g.unlift()
  })

  audio.play();
  canvas.removeEventListener('click', play)
};

let engineOn = null;

const audio = document.getElementById('audio');


c.font="60px robot";
c.fillStyle="white"
c.fillText(`Copters`, 350, 150)
c.font="40px robot";
c.fontStyle="white"
c.fillText(`Click to start`, 350, 300)

canvas.addEventListener('click', play);}
