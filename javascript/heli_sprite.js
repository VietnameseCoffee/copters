import Collidable from './collidable';

let copter = new Image();
copter.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/helicopter_sprites.png"

class HeliSprite extends Collidable{

  constructor(x, y, v) {
    super(x, y, v)
    let copter = new Image();
    copter.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/helicopter_sprites.png"

    this.width = 423;
    this.height = 600;
    this.image = copter;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    console.log("git")
    c.drawImage(this.image, 10, 10,200, 200, 100, 100, 200, 200)
  }
}

export default HeliSprite;
