import Collidable from './collidable';


class Helicopter extends Collidable {

  constructor(x, y, v) {
    super(x, y, v)
    this.width = 90;
    this.height = 47;
    this.g = 0;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    // blades
    c.beginPath();
    c.ellipse((this.x + 52), (this.y + 12), 40, 10, 0, 0, 2*Math.PI);
    c.stroke();
    // fuselage
    c.beginPath();
    c.strokeRect((this.x+30),(this.y+15), 50, 25);
    c.stroke();
    // landing skids
    c.beginPath();
    c.strokeRect((this.x+24), (this.y+43), 65, 3);
    c.stroke();
    // tail boom
    c.beginPath();
    c.strokeRect((this.x+8), (this.y+26), 22, 7);
    c.stroke();
    // steering blades
    c.beginPath();
    c.arc((this.x+8), (this.y+26),6,0,2*Math.PI);
    c.stroke();
    // box
    // c.beginPath();
    // c.strokeRect((this.x), (this.y), 92, 47);
    // c.stroke();
  }

  move(c) {
    this.v = this.v + this.g;
    this.y = this.y + this.v;

    this.draw(c);
  }

  lift() {
    this.v = this.v + 2;
  }
}

export default Helicopter;
