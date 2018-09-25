import Helicopter from './helicopter';
import Brick from './brick';
import Stalactite from './stalactite';
import Background from './background';
import Bullet from './bullet';

class Game {

  constructor(c) {
    this.c = c;
    this.copter = new Helicopter(250, 100, 0);
    this.floor = new Brick(0, 616, 0, 9001, 1000, 20);
    this.ceiling = new Brick(0, -20, 0, 9001, 1000, 20);
    this.bricks = Brick.init_bricks();
    this.score = 0;
    this.highScore = 0;
    this.stalactite = new Stalactite(1800, 0);
    this.background = new Background();
    this.activeBullets = [];

    this.alive = this.alive.bind(this);
    this.animate = this.animate.bind(this);
    this.lift = this.lift.bind(this);
    this.replay = this.replay.bind(this);
    this.replay = this.replay.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    let currentBrick = this.bricks[0];
    let lastBullet = this.activeBullets[0];
    this.c.clearRect(0,0, 1200, 640);
    this.background.draw(this.c)

    this.c.font="20px Sans Serif";
    this.c.fontStyle="white"
    this.c.fillText(`Score: ${this.score}`, 50, 50)

    this.c.font="20px Sans Serif";
    this.c.fontStyle="white"
    this.c.fillText(`Bullets: ${this.copter.bullets}`, 50, 80)

    this.copter.move(this.c);

    if (currentBrick.x < -25){
      this.bricks.shift();
      this.bricks.push(Brick.make_brick())
    }

    if (this.stalactite.x < -25) {
      this.stalactite.reset()
    }

    if (lastBullet && lastBullet.x > 1300) {
      this.activeBullets.shift();
    }

    this.activeBullets.forEach((bullet) => {
      bullet.checkHit(this.bricks);
    })
    this.activeBullets.forEach((bullet) => {
      bullet.checkHit(this.stalactite.arr);
    })

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

    if (!this.copter.isSafeFrom(this.bricks)) {
      return false
    }

    if (!this.copter.isSafeFrom(this.stalactite.arr)) {
      return false
    }
    return (
      this.copter.safe(this.ceiling) &&
      this.copter.safe(this.floor))
  }

  move_all() {
    for (let i = 0; i <this.bricks.length; i++) {
      this.bricks[i].move(this.c)
    }

    this.activeBullets.forEach((bullet) => {
      bullet.move(this.c);
    })

    this.stalactite.move(this.c)
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }

  shoot() {
    let bullet = this.copter.shoot()
    if (bullet) {
      this.activeBullets.push(bullet)
    }
  }

  paintIntro (){
    setTimeout(() => {
      this.background.draw(this.c)
      this.c.font="40px Sans Serif";
      this.c.fillStyle="white"
      this.c.fillText(`Instructions`, 500, 210);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white"
      this.c.fillText(`Click to start the game`, 450, 310);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white"
      this.c.fillText(`Click and hold on your mouse to lift the copter`, 290, 350);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white";
      this.c.fillText(`Press space to shoot bullets`, 420, 390);
    }, 400)
  }

  paintGG() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.c.font="60px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Game Over :(`, 420, 120)
    this.c.font="30px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Your High Score: ${this.highScore - 1}`, 470, 180)
    this.c.font="38px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Click to play again`, 440, 330);

    setTimeout(() => {
      canvas.addEventListener('click', this.replay)
    }, 700)
  }

  replay() {
    this.score = 0;

    this.copter = new Helicopter(250, 100, 0);
    this.bricks = Brick.init_bricks();
    this.stalactite = new Stalactite(1500, 0);
    this.background.offset = 0;
    this.activeBullets = [];

    canvas.removeEventListener('click', this.replay)
    this.play();
  }
}

export default Game;
