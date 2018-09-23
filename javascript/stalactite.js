import Brick from './brick';

class Stalactite extends Brick {

  constructor(x) {
    super(x)

    this.top = new Brick(this.x, 0, 5.5, 50, 69 )
    this.mid1 = new Brick(this.x + 6, 69, 5.5, 37.5, 45)
    this.mid2 = new Brick(this.x + 13, 114, 5.5, 25, 32 )
    this.tip = new Brick(this.x + 19, 146, 5.5, 12, 40 )
  }

  move() {
    this.top.displace()
    this.mid1.displace()
    this.mid2.displace()
    this.tip.displace()
  }

  draw(c) {
    
  }
}

export default Stalactite;
