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
    let randX = (1220);
    return (new Brick(randX, randY, 5.5, 60, 70))
  }

  static init_bricks () {
    const bricks = [];

    for (let i = 0; i < 3; i++) {
      ((i) => {
      const newBrick = Brick.make_brick()
      newBrick.x = newBrick.x + (i * 420)
      bricks.push(newBrick);

      if (i > 1) {
        const extraBrick = Brick.make_brick();
        extraBrick.x = (extraBrick.x + (i * 400) + 190);
        bricks.push(extraBrick);
      }
      })(i)
    }

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
    this.displace();
    this.draw(c)
  }

  displace() {
    this.x = this.x - this.v;
  }
}

export default Brick;
