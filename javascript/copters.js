

const canvas = document.getElementById("canvas");

console.log(canvas)

canvas.width = 900;
canvas.height = 640;

const c = canvas.getContext('2d');

c.beginPath();
c.moveTo(0,0)
c.lineTo(50,50);
c.stroke();

c.beginPath();
c.arc(100,75,50,0,2*Math.PI);
c.stroke();

c.clearRect(0, 0,100, 100);
