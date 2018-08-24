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
    this.bricks = Brick.init_bricks();
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

    if (currentBrick.x < -10){
      this.bricks.shift();

      this.bricks.push(Brick.make_brick())
    } else {
      currentBrick.move(this.c);
      this.bricks[1].move(this.c);
    }

    this.wall.draw(this.c);
    this.wall2.draw(this.c);

    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      c.font="60px robot";
      c.fillStyle="white";
      c.fillText(`Game Over`, 310, 150)
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

  paintIntro (){
    this.c.font="60px robot";
    this.c.fillStyle="white"
    this.c.fillText(`Copters`, 350, 150)
    this.c.font="40px robot";
    this.c.fontStyle="white"
    this.c.fillText(`Click to start`, 350, 300)
  }
}

// starting game code, block scoped;

let g = new CoptersGame(c);
g.paintIntro();


const play = () => {
  g.play();
  canvas.addEventListener('mousedown',() => {

    audio.play();
    g.lift()
  })
  canvas.addEventListener('mouseup',() => {
    audio.pause();
    audio.currentTime = 1 ;
    g.unlift()
  })
  canvas.removeEventListener('click', play)
};

let engine= null;
const audio = document.getElementById('audio');


c.font="60px robot";
c.fillStyle="white"
c.fillText(`Copters`, 350, 150)
c.font="40px robot";
c.fontStyle="white"
c.fillText(`Click to start`, 350, 300)

canvas.addEventListener('click', play);
