import Collidable from './collidable';


class Brick extends Collidable {

  constructor(x, y, v, width, height) {
    super(x, y, v)
    this.width = width;
    this.height = height;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  static make_brick () {
    let randY = (Math.random() * 580);
    let X = (1000);
    return (new Brick(X, randY, 7, 50, 90))
  }

  static init_bricks () {
    const bricks = [];
    let i;
    for (i = 0; i < 2; i++) {
      bricks.push(Brick.make_brick());
    }
    console.log(bricks)
    return bricks;
  }

  draw(c) {
    c.beginPath();
    c.fillStyle="#E70F05";
    c.fillRect((this.x),(this.y), this.width, this.height);
    c.stroke();

    c.beginPath();
    c.strokeStyle="#5D1101";
    c.strokeRect((this.x),(this.y), this.width, this.height);
    c.stroke();
  }

  move(c) {
    this.x = this.x - this.v;
    this.draw(c)
  }
}

export default Brick;
