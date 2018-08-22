import Helicopter from './helicopter';
import Brick from './brick';

const canvas = document.getElementById("canvas");

console.log(canvas)

canvas.width = 1000;
canvas.height = 640;

const c = canvas.getContext('2d');

let copter = new Helicopter(150, 150);
let brick = new Brick(1000, 200)


let i = 0;

const animate = () => {
  c.clearRect(0,0, 1000, 640);

  copter.move(c);
  brick.move(c);

  // circle


  requestAnimationFrame(animate);
};

animate();

c.strokeStyle="blue";
c.strokeRect(150, 150, 103, 50)
