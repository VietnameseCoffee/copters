import Collidable from './collidable';


class Brick extends Collidable {

  constructor(x, y, v) {
    super(x, y, v)
    this.width = 40;
    this.height = 70;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    c.beginPath();
    c.strokeRect((this.x),(this.y), this.width, this.height);
    c.stroke();
  }

  move(c) {
    console.log(this.v)
    this.x = this.x - this.v;
    this.draw(c)
  }
}

export default Brick;
