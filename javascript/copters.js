import Helicopter from './helicopter';
import Brick from './brick';

const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 640;
const c = canvas.getContext('2d');


class CoptersGame {

  constructor(c) {
    this.copter = new Helicopter(150, 100, 0);
    this.c = c;
    this.brick = new Brick(500, 250, 3);

    this.animate = this.animate.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    this.c.clearRect(0,0, 1000, 640);

    this.copter.move(this.c);
    this.brick.move(this.c);



    if (!this.copter.didCollide(this.brick)) {
      requestAnimationFrame(this.animate);
    } else {
      // boombooms
      // game over show score
    }

  }

}

let g = new CoptersGame(c);

g.play();
