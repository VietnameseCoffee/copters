

class Collidable {

  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.v = v;

    this.safe = this.safe.bind(this);
  }

  draw(c) {

  }

  move(c) {

  }

  safe(obj) {

    const thisFront = this.x + this.width - 16;
    const thisBack = this.x + 2;
    const thisTop = this.y + 4;
    const thisBottom = this.y + this.height - 3;

    const objFront = obj.x + obj.width;
    const objBack = obj.x;
    const objTop = obj.y;
    const objBottom = obj.y + obj.height;

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

}

export default Collidable;
