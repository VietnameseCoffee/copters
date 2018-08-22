

class Collidable {

  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.v = v;

    this.didCollide = this.didCollide.bind(this);
  }

  draw(c) {

  }

  move(c) {

  }

  didCollide(obj) {

    const thisFront = this.x + this.width;
    const thisBack = this.x;
    const thisTop = this.y;
    const thisBottom = this.y + this.height;

    const objFront = obj.x + obj.width;
    const objBack = obj.x;
    const objTop = obj.y;
    const objBottom = obj.y + obj.height;

    // console.log(thisFront, thisBack, thisTop, thisBottom)
    // console.log(objFront, objBack, objTop, objBottom)

    // console.log(thisFront > objBack && thisBack < objFront)
    console.log(thisTop > objBottom && thisBottom < objTop)




  }


}

export default Collidable;
