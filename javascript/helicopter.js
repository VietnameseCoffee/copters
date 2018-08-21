import Collidable from './collidable';


class Helicopter extends Collidable{

  constructor(x, y) {
    super(x, y)
    this.width = 90;
    this.height = 30;
    this.draw = this.draw.bind(this);
  }

  draw(c) {
    // Copter
    console.log("hit");
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
  }
}

export default Helicopter;
