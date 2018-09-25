import Collidable from './collidable';


class Bullet extends Collidable {
  constructor(x, y, v, hp) {
    super(x, y, v, hp)
    this.width = 40;
    this.height = 40;

    this.draw = this.draw.bind(this)
  }

  checkHit(objects) {
    if (this.hp < 1) {
      return false;
    }

    for (let i=0; i < objects.length; i++) {
      if (!this.hit(objects[i])) {
        objects[i].hp = objects[i].hp - 1;
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
    let mid = this.width / 2;
    c.beginPath();
    c.fillStyle="#00bfbf";
    c.arc((this.x + mid),(this.y + mid), mid,0,2*Math.PI);
    c.fill();
    c.fillStyle="#E70F05";

    c.beginPath();
    c.strokeStyle="#006666";
    c.arc((this.x + mid),(this.y + mid), mid,0,2*Math.PI);
    c.stroke();
    c.strokeStyle="#5D1101";
  }

}

export default Bullet;
