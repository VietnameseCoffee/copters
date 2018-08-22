

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

    const thisFront = this.x + this.width;
    const thisBack = this.x;
    const thisTop = this.y;
    const thisBottom = this.y + this.height;

    const objFront = obj.x + obj.width;
    const objBack = obj.x;
    const objTop = obj.y;
    const objBottom = obj.y + obj.height;
    //
    if (thisFront > objBack && thisBack < objFront) {
      console.log(thisBottom > objTop && thisTop < objBottom)
      return (!(thisBottom > objTop && thisTop < objBottom))
    }
    return (true)
  }

}

export default Collidable;
