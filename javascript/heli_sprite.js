import Collidable from './collidable';

let copter = new Image();
copter.src = "./../imports/helicopter_sprites.png"

class HeliSprite extends Collidable{

  constructor(x, y, v) {
    super(x, y, v)
    let copter = new Image();
    copter.src = "../imports/helicopter_sprites.png"

    this.width = 423;
    this.height = 600;
    this.image = copter;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    c.drawImage(this.image, 10, 10)
  }
}

export default HeliSprite;
