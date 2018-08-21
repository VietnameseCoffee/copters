import Helicopter from './helicopter';

const canvas = document.getElementById("canvas");

console.log(canvas)

canvas.width = 900;
canvas.height = 640;

const c = canvas.getContext('2d');



c.beginPath();
c.arc(100,75,50,0,2*Math.PI);
c.stroke();

let i = 0;

const animate = () => {
  c.clearRect(0,0, 900, 600);

  // circle
  c.beginPath();
  c.fillStyle="red";
  c.fillRect(400 + i, 200 , 20, 50);
  c.stroke();
  i = i + 1;

  requestAnimationFrame(animate);
};

// animate();


let copter = new Helicopter(200, 200);
copter.draw(c)
