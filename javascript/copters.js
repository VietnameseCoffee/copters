import Helicopter from './helicopter';
import HeliSprite from './heli_sprite'
import Brick from './brick';

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
    }

    this.move_all();

    this.wall.draw(this.c);
    this.wall2.draw(this.c);


    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      this.paintGG();
    }
  }

  alive() {
    this.score = this.score + 1;
    console.log(this.score);

    for (let i=0; i < this.bricks.length; i++) {
      if (!this.copter.safe(this.bricks[i])) {
        return false
      }
    }
    return (
      this.copter.safe(this.wall2) &&
      this.copter.safe(this.wall))
  }

  move_all() {
    for (let i = 0; i <this.bricks.length; i++) {
      this.bricks[i].move(this.c)
    }
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }

  paintIntro (){
    this.c.font="80px robot";
    this.c.fillStyle="white"
    this.c.fillText(`Copters`, 340, 150)
    this.c.font="32px robot";
    this.c.fontStyle="white"
    this.c.fillText(`Instructions:`, 250, 280)
    this.c.font="28px robot";
    this.c.fontStyle="white"
    this.c.fillText(`Navigate throught he cave avoiding walls`, 250, 320)
    this.c.font="28px robot";
    this.c.fontStyle="white"
    this.c.fillText(`and bricks. Left click to lift the helicopter`, 250, 350)
    this.c.font="28px robot";
    this.c.fontStyle="white"
    this.c.fillText(`Unclick to let the helicopter fall`, 250, 380)
  }

  paintGG() {
    this.c.font="60px robot";
    this.c.fillStyle="white";
    this.c.fillText(`Game Over`, 310, 150)
  }
}


const canvas = document.getElementById("canvas");
canvas.width = 900;
canvas.height = 580;
const c = canvas.getContext('2d');

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
    audio.currentTime = 0 ;
    g.unlift()
  })
  canvas.removeEventListener('click', play)
};

const audio = document.getElementById('audio');
canvas.addEventListener('click', play);
