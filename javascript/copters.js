import Helicopter from './helicopter';

const canvas = document.getElementById("canvas");

console.log(canvas)

canvas.width = 1000;
canvas.height = 640;

const c = canvas.getContext('2d');

let copter = new Helicopter(150, 150);


let i = 0;

const animate = () => {
  c.clearRect(0,0, 900, 600);

  copter.draw(c)

  // circle

  c.beginPath();
  c.fillStyle="red";
  c.fillRect(900 - i, 200 , 20, 50);
  c.stroke();
  i = i + 1;

  // requestAnimationFrame(animate);
};

animate();

c.strokeStyle="blue";
c.strokeRect(150, 150, 103, 50)
