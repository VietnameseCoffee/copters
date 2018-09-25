import Collidable from './collidable';


class Bullet extends Collidable {
  constructor(x, y, v, hp) {
    super(x, y, v, hp)
    this.width = 10;
    this.height = 10;

    this.draw = this.draw.bind(this)
  }

  checkHit(objects) {
    if (this.hp < 1) {
      return false;
    }

    for (let i=0; i < objects.length; i++) {
      if (!this.safe(objects[i])) {
        objects[i].hp = 0;
        this.hp = 0;
        return true;
      }
    }

  }

  move(c) {
    this.x = this.x + this.v
    this.draw(c)
  }

  draw(c) {
    if (this.isDead()) {
      return;
    }

    c.beginPath();
    c.fillStyle="#E70F05";
    c.fillRect((this.x),(this.y), this.width, this.height);
    c.stroke();

    c.beginPath();
    c.strokeStyle="#5D1101";
    c.strokeRect((this.x),(this.y), this.width, this.height);
    c.stroke();
  }

}

export default Bullet;
