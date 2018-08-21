

const canvas = document.getElementById("canvas");

console.log(canvas)

canvas.width = 900;
canvas.height = 640;

const c = canvas.getContext('2d');



c.beginPath();
c.arc(100,75,50,0,2*Math.PI);
c.stroke();


// Copter

c.beginPath();
c.ellipse(200, 200, 40, 10, 0, 0, 2*Math.PI);
c.stroke();

c.beginPath();
c.strokeRect(175, 205, 50, 25);
c.stroke();

c.beginPath();
c.strokeRect(170, 233, 65, 3);
c.stroke();

c.beginPath();
c.strokeRect(145, 210, 30, 7);
c.stroke();

c.beginPath();
c.arc(145,210,6,0,2*Math.PI);
c.stroke();

c.beginPath();
c.arc(400, 200, 50, 0, 2*Math.PI);
c.stroke();

let i = 0;

const animate = () => {
  c.clearRect(0,0, 900, 600);
  // Copter

  c.beginPath();
  c.ellipse(200, 200, 40, 10, 0, 0, 2*Math.PI);
  c.stroke();

  c.beginPath();
  c.strokeRect(175, 205, 50, 25);
  c.stroke();

  c.beginPath();
  c.strokeRect(170, 233, 65, 3);
  c.stroke();

  c.beginPath();
  c.strokeRect(145, 210, 30, 7);
  c.stroke();

  c.beginPath();
  c.arc(145,210,6,0,2*Math.PI);
  c.stroke();


  // circle
  c.beginPath();
  c.fillRect(400 + i, 200 , 20, 50);
  c.strokeStyle="red";
  c.stroke();
  i = i + 1;

  requestAnimationFrame(animate);
};

animate();
