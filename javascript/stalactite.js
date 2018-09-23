import Brick from './brick';

class Stalactite extends Brick {

  constructor(x) {
    super(x)
    this.v = 5.5;

    this.top = new Brick(this.x, 0, 5.5, 50, 69 )
    this.mid1 = new Brick(this.x + 6, 69, 5.5, 37.5, 60)
    this.mid2 = new Brick(this.x + 13, 129, 5.5, 25, 55 )
    this.tip = new Brick(this.x + 19, 184, 5.5, 12, 60 )

    this.arr = [this.top, this.mid1, this.mid2, this.tip]

    this.draw = this.draw.bind(this)
    this.move = this.move.bind(this)
    this.reset = this.reset.bind(this)
  }

  move(c) {
    console.log(this.arr[0].x)
    this.top.displace(c)
    this.mid1.displace(c)
    this.mid2.displace(c)
    this.tip.displace(c)

    this.draw(c)
  }

  draw(c) {

    this.x = this.x - this.v
    c.beginPath();
    c.lineWidth=3;
    c.moveTo(this.x - 4, 0);
    c.lineTo((this.x + 20), 228);
    c.lineTo((this.x + 23), 244);
    c.lineTo((this.x + 26), 244);
    c.lineTo((this.x + 30), 228);
    c.lineTo((this.x + 54), 0);
    c.fill();
    c.stroke();
  }

  reset() {
    // console.log(this.top.x)
    this.x = 3000 + (Math.random() * 2000);
    this.top = new Brick(this.x, 0, 5.5, 50, 69 )
    this.mid1 = new Brick(this.x + 6, 69, 5.5, 37.5, 60)
    this.mid2 = new Brick(this.x + 13, 129, 5.5, 25, 55 )
    this.tip = new Brick(this.x + 19, 184, 5.5, 12, 60 )
    this.arr = [this.top, this.mid1, this.mid2, this.tip]
  }


}

export default Stalactite;
