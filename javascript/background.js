
class Background {

  constructor() {
    let image1 = new Image;
    image1.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/lava_cave.jpg"
    this.img = image1
    this.offset = 0;
  }

  draw(c) {
    this.offset = this.offset - 0.23;
    c.globalAlpha = 0.7;
    c.drawImage(this.img, 0, 0, 996, 615, this.offset, 0, 1202, 630);
    c.drawImage(this.img, 0, 0, 996, 615, 1202 + this.offset, 0, 1202, 630);
    c.globalAlpha = 1.0;
  }
}

export default Background;
