import Helicopter from './helicopter';
import HeliSprite from './heli_sprite'
import Brick from './brick';

class Game {

  constructor(c, canvas) {
    this.c = c;
    // this.canvas = canvas;
    this.copter = new Helicopter(250, 100, 0);
    this.floor = new Brick(0, 616, 0, 1000, 20);
    this.ceiling = new Brick(0, -20, 0, 1000, 20);
    this.bricks = Brick.init_bricks();
    this.score = 0;

    this.alive = this.alive.bind(this);
    this.animate = this.animate.bind(this);
    this.lift = this.lift.bind(this);
    this.replay = this.replay.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    let currentBrick = this.bricks[0];
    this.c.clearRect(0,0, 1200, 640);

    this.c.font="28px arial";
    this.c.fillText(`Score: ${this.score}`, 50, 50)

    this.copter.move(this.c);

    if (currentBrick.x < -10){
      this.bricks.shift();
      this.bricks.push(Brick.make_brick())
    }

    this.move_all();

    this.floor.draw(this.c);
    this.ceiling.draw(this.c);


    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      this.paintGG();
    }
  }

  alive() {
    this.score = this.score + 1;

    for (let i=0; i < this.bricks.length; i++) {
      if (!this.copter.safe(this.bricks[i])) {
        return false
      }
    }
    return (
      this.copter.safe(this.ceiling) &&
      this.copter.safe(this.floor))
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
    this.c.font="40px arial";
    this.c.fillStyle="white"
    this.c.fillText(`Instructions`, 340, 180)
    this.c.font="28px arial";
    this.c.fontStyle="white"
    this.c.fillText(`Click to start the game`, 250, 220)
    this.c.font="28px arial";
    this.c.fontStyle="white"
    this.c.fillText(`Click and hold on your mouse to lift the copter`, 200, 250)
  }

  paintGG() {
    this.c.font="60px Arial";
    this.c.fillStyle="white";
    this.c.fillText(`Game Over`, 440, 150)

    canvas.addEventListener('click', this.replay)
  }

  replay() {
    console.log(canvas)

    this.copter = new Helicopter(250, 100, 0);
    this.bricks = Brick.init_bricks();
    this.score = 0;
    canvas.removeEventListener('click', this.replay)
    this.play();
  }
}

export default Game;
