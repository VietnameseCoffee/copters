import Collidable from './collidable';


class Brick extends Collidable {

  constructor(x, y) {
    super(x, y)
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
    this.x = this.x - 3;
    this.draw(c)
  }
}

export default Brick;
