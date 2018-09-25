

class Collidable {

  constructor(x, y, v, hp) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.hp = hp;

    this.safe = this.safe.bind(this);
  }

  draw(c) {

  }

  move(c) {

  }

  safe(obj) {

    const thisFront = this.x + this.width - 23;
    const thisBack = this.x + 2;
    const thisTop = this.y + 4;
    const thisBottom = this.y + this.height - 3;

    const objFront = obj.x + obj.width;
    const objBack = obj.x;
    const objTop = obj.y;
    const objBottom = obj.y + obj.height;

    if (obj.isDead()) {
      return true
    }

    if (thisFront > objBack && thisBack < objFront) {
      return (!(thisBottom > objTop && thisTop < objBottom))
    }
    return (true)
  }

  hit(obj) {
    const thisFront = this.x + this.width - 2;
    const thisBack = this.x;
    const thisTop = this.y;
    const thisBottom = this.y + this.height;

    const objFront = obj.x + obj.width;
    const objBack = obj.x;
    const objTop = obj.y;
    const objBottom = obj.y + obj.height;

    if (obj.isDead()) {
      return true
    }

    if (thisFront > objBack && thisBack < objFront) {
      return (!(thisBottom > objTop && thisTop < objBottom))
    }
    return (true)
  }

  isSafeFrom(objects) {
    for (let i=0; i < objects.length; i++) {
      if (!this.safe(objects[i])) {
        return false
      }
    }
    return true;
  }

  isDead() {
    return this.hp < 1;
  }
}

export default Collidable;
