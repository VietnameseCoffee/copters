import Helicopter from './helicopter';
import Brick from './brick';

const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 640;
const c = canvas.getContext('2d');

// let copter = new Helicopter(150, 150, 1);
// let brick = new Brick(1000, 200, 3)
//
// const animate = () => {
//   c.clearRect(0,0, 1000, 640);
//
//   copter.move(c);
//   brick.move(c);
//
//   requestAnimationFrame(animate);
// };
// animate();


class CoptersGame {

  constructor(c) {
    this.copter = new Helicopter(150, 150, 1);
    this.c = c;
    this.brick = new Brick(1000, 200, 3);

    this.animate = this.animate.bind(this);
  }

  play() {

  }

  animate() {
    this.c.clearRect(0,0, 1000, 640);

    this.copter.move(this.c);
    this.brick.move(this.c);

    requestAnimationFrame(this.animate);
  }

}

let g = new CoptersGame(c);

g.animate();
