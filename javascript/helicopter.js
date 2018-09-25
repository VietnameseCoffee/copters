import Collidable from './collidable';
import Bullet from './bullet';

class Helicopter extends Collidable {

  constructor(x, y, v) {
    super(x, y, v)

    let img = new Image();
    img.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/helicopter_sprites.png"

    this.width = 160;
    this.height = 80;
    this.g = 0.33;
    this.img = img
    this.frame = 0;
    this.tick = 0;
    this.bullets = 3;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.update = this.update.bind(this);;
  }

  draw(c) {
    this.update();

    c.drawImage(this.img, 0, (this.frame * 150), 415, 150, this.x, this.y, this.width, this.height)
  }

  update () {
    this.tick = this.tick + 1;
    if (this.tick === 3) {
      this.tick = 0;
      this.frame = (this.frame + 1);
      if (this.frame === 4) {
        this.frame = 0
      }
    }
  }

  move(c) {
    this.v = this.v + this.g;
    this.y = this.y + this.v;

    this.draw(c);
  }

  lift() {
    if (this.v > 1) {
      this.v = this.v - 2.8;
    }
    this.g = -0.52;
  }

  unlift() {
    if (this.v > -1.0) {
      this.v = this.v + 2.9;
    }
    this.g = 0.67;
  }

  shoot() {
    if (this.bullets < 1) {
      return null
    }
    this.bullets = this.bullets - 1;
    return new Bullet(this.x + 100, this.y + 45, 5, 1);

  }
}

export default Helicopter;
