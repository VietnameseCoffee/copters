/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/background.js":
/*!**********************************!*\
  !*** ./javascript/background.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);


/***/ }),

/***/ "./javascript/brick.js":
/*!*****************************!*\
  !*** ./javascript/brick.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");



class Brick extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(x, y, v, hp, width, height) {
    super(x, y, v, hp)
    this.width = width;
    this.height = height;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.isDead = this.isDead.bind(this);
  }

  static make_brick () {
    let randY = (Math.random() * 580);
    let randX = (1220);
    return (new Brick(randX, randY, 5.5, 1, 60, 70))
  }

  static init_bricks () {
    const bricks = [];

    for (let i = 0; i < 3; i++) {
      ((i) => {
      const newBrick = Brick.make_brick()
      newBrick.x = newBrick.x + (i * 420)
      bricks.push(newBrick);

      if (i > 1) {
        const extraBrick = Brick.make_brick();
        extraBrick.x = (extraBrick.x + (i * 400) + 190);
        bricks.push(extraBrick);
      }
      })(i)
    }

    return bricks;
  }

  draw(c) {
    if (this.isDead()) {
      return;
    }

    c.beginPath();
    c.fillStyle="#E70F05";
    c.fillRect((this.x),(this.y), this.width, this.height);
    c.stroke();

    c.beginPath();
    c.strokeStyle="#5D1101";
    c.strokeRect((this.x),(this.y), this.width, this.height);
    c.stroke();
  }

  move(c) {
    this.displace();
    this.draw(c)
  }

  displace() {
    this.x = this.x - this.v;
  }

  isDead() {
    return this.hp < 1;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);


/***/ }),

/***/ "./javascript/bullet.js":
/*!******************************!*\
  !*** ./javascript/bullet.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");



class Bullet extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, v, hp) {
    super(x, y, v, hp)
    this.width = 40;
    this.height = 40;

    this.draw = this.draw.bind(this)
  }

  checkHit(objects) {
    if (this.hp < 1) {
      return false;
    }

    for (let i=0; i < objects.length; i++) {
      if (!this.hit(objects[i])) {
        objects[i].hp = objects[i].hp - 1;
        this.hp = 0;
        return true;
      }
    }

  }

  move(c) {
    this.x = this.x + this.v
    this.draw(c)
  }

  draw(c) {
    if (this.isDead()) {
      return;
    }
    let mid = this.width / 2;
    c.beginPath();
    c.fillStyle="#00bfbf";
    c.arc((this.x + mid),(this.y + mid), mid,0,2*Math.PI);
    c.fill();
    c.fillStyle="#E70F05";

    c.beginPath();
    c.strokeStyle="#006666";
    c.arc((this.x + mid),(this.y + mid), mid,0,2*Math.PI);
    c.stroke();
    c.strokeStyle="#5D1101";
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);


/***/ }),

/***/ "./javascript/collidable.js":
/*!**********************************!*\
  !*** ./javascript/collidable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collidable);


/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helicopter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helicopter */ "./javascript/helicopter.js");
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick */ "./javascript/brick.js");
/* harmony import */ var _stalactite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stalactite */ "./javascript/stalactite.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background */ "./javascript/background.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ "./javascript/bullet.js");






class Game {

  constructor(c) {
    this.c = c;
    this.copter = new _helicopter__WEBPACK_IMPORTED_MODULE_0__["default"](250, 100, 0);
    this.floor = new _brick__WEBPACK_IMPORTED_MODULE_1__["default"](0, 616, 0, 9001, 1000, 20);
    this.ceiling = new _brick__WEBPACK_IMPORTED_MODULE_1__["default"](0, -20, 0, 9001, 1000, 20);
    this.bricks = _brick__WEBPACK_IMPORTED_MODULE_1__["default"].init_bricks();
    this.score = 0;
    this.highScore = 0;
    this.stalactite = new _stalactite__WEBPACK_IMPORTED_MODULE_2__["default"](1800, 0);
    this.background = new _background__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.activeBullets = [];

    this.alive = this.alive.bind(this);
    this.animate = this.animate.bind(this);
    this.lift = this.lift.bind(this);
    this.replay = this.replay.bind(this);
    this.replay = this.replay.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    let currentBrick = this.bricks[0];
    let lastBullet = this.activeBullets[0];
    this.c.clearRect(0,0, 1200, 640);
    this.background.draw(this.c)


    this.copter.move(this.c);

    if (currentBrick.x < -25){
      this.bricks.shift();
      this.bricks.push(_brick__WEBPACK_IMPORTED_MODULE_1__["default"].make_brick())
    }

    if (this.stalactite.x < -25) {
      this.stalactite.reset()
    }

    if (lastBullet && lastBullet.x > 1300) {
      this.activeBullets.shift();
    }

    this.activeBullets.forEach((bullet) => {
      bullet.checkHit(this.bricks);
    })
    this.activeBullets.forEach((bullet) => {
      bullet.checkHit(this.stalactite.arr);
    })

    this.move_all();
    
    this.c.font="20px Sans Serif";
    this.c.fillStyle="white"
    this.c.fillText(`Score: ${this.score}`, 50, 50)

    this.c.font="20px Sans Serif";
    this.c.fillStyle="white"
    this.c.fillText(`Bullets: ${this.copter.bullets}`, 50, 80)

    this.floor.draw(this.c);
    this.ceiling.draw(this.c);


    if (this.alive()) {
      requestAnimationFrame(this.animate);
    } else {
      this.paintGG();
    }
  }

  alive() {
    this.score = this.score + 1;

    if (!this.copter.isSafeFrom(this.bricks)) {
      return false
    }

    if (!this.copter.isSafeFrom(this.stalactite.arr)) {
      return false
    }
    return (
      this.copter.safe(this.ceiling) &&
      this.copter.safe(this.floor))
  }

  move_all() {
    for (let i = 0; i <this.bricks.length; i++) {
      this.bricks[i].move(this.c)
    }

    this.activeBullets.forEach((bullet) => {
      bullet.move(this.c);
    })

    this.stalactite.move(this.c)
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }

  shoot() {
    let bullet = this.copter.shoot()
    if (bullet) {
      this.activeBullets.push(bullet)
    }
  }

  paintIntro (){
    setTimeout(() => {
      this.background.draw(this.c)
      this.c.font="40px Sans Serif";
      this.c.fillStyle="white"
      this.c.fillText(`Instructions`, 500, 210);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white"
      this.c.fillText(`Click to start the game`, 450, 310);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white"
      this.c.fillText(`Click and hold on your mouse to lift the copter`, 290, 350);
      this.c.font="28px Sans Serif";
      this.c.fontStyle="white";
      this.c.fillText(`Press space to shoot bullets`, 420, 390);
    }, 400)
  }

  paintGG() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.c.font="60px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Game Over :(`, 420, 120)
    this.c.font="30px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Your High Score: ${this.highScore - 1}`, 470, 180)
    this.c.font="38px Sans Serif";
    this.c.fillStyle="white";
    this.c.fillText(`Click to play again`, 440, 330);

    setTimeout(() => {
      canvas.addEventListener('click', this.replay)
    }, 700)
  }

  replay() {
    this.score = 0;

    this.copter = new _helicopter__WEBPACK_IMPORTED_MODULE_0__["default"](250, 100, 0);
    this.bricks = _brick__WEBPACK_IMPORTED_MODULE_1__["default"].init_bricks();
    this.stalactite = new _stalactite__WEBPACK_IMPORTED_MODULE_2__["default"](1500, 0);
    this.background.offset = 0;
    this.activeBullets = [];

    canvas.removeEventListener('click', this.replay)
    this.play();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./javascript/helicopter.js":
/*!**********************************!*\
  !*** ./javascript/helicopter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ "./javascript/bullet.js");



class Helicopter extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"] {

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
    this.bullets = 10;

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
    this.g = -0.42;
  }

  unlift() {
    if (this.v > -1.0) {
      this.v = this.v + 2.9;
    }
    this.g = 0.52;
  }

  shoot() {
    if (this.bullets < 1) {
      return null
    }
    this.bullets = this.bullets - 1;
    return new _bullet__WEBPACK_IMPORTED_MODULE_1__["default"](this.x + 100, this.y + 45, 5, 1);

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helicopter);


/***/ }),

/***/ "./javascript/stalactite.js":
/*!**********************************!*\
  !*** ./javascript/stalactite.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ "./javascript/brick.js");


class Stalactite extends _brick__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(x) {
    super(x)
    this.v = 4.2;

    this.top = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, 0, this.v, 9001, 50, 69)
    this.mid1 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 6, 69, this.v, 379001, .5, 60)
    this.mid2 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 13, 129, this.v, 9001, 25, 55)
    this.tip = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 19, 184, this.v, 9001, 12, 60)

    this.arr = [this.top, this.mid1, this.mid2, this.tip]

    this.draw = this.draw.bind(this)
    this.move = this.move.bind(this)
    this.reset = this.reset.bind(this)
  }

  move(c) {
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
    c.lineWidth=2.2;
  }

  reset() {
    this.x = 1300 + (Math.random() * 5000);
    this.top = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, 0, this.v, 50, 69 )
    this.mid1 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 6, 69, this.v, 37.5, 60)
    this.mid2 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 13, 129, this.v, 25, 55 )
    this.tip = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 19, 184, this.v, 12, 60 )
    this.arr = [this.top, this.mid1, this.mid2, this.tip]
  }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stalactite);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./javascript/copters.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./javascript/game.js");


const isWidget = window.location.search.includes("widget=true");
if (isWidget) {
  document.querySelector(".title").remove();
}

const canvas = document.getElementById("canvas");
canvas.width = 1100;
canvas.height = 616;
const c = canvas.getContext("2d");
let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](c, canvas);

game.paintIntro();

const startGame = () => {
  game.play();

  canvas.addEventListener("mousedown", () => {
    audio.play();
    game.lift();
  });

  canvas.addEventListener("mouseup", () => {
    audio.pause();
    audio.currentTime = 0;
    game.unlift();
  });
  canvas.removeEventListener("click", startGame);
};

let audio = document.getElementById("audio");

let nullAudio = {
  play: () => {},
  pause: () => {},
};
const toggle = document.getElementById("music-toggle");

toggle.addEventListener("click", () => {
  if (audio === nullAudio) {
    audio = document.getElementById("audio");
    toggle.classList.remove("fa-volume-off");
    toggle.classList.add("fa-volume-up");
  } else {
    audio = nullAudio;
    toggle.classList.remove("fa-volume-up");
    toggle.classList.add("fa-volume-off");
  }
});
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    game.shoot();
  }
};
canvas.addEventListener("click", startGame);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map