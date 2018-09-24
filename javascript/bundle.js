/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/copters.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/brick.js":
/*!*****************************!*\
  !*** ./javascript/brick.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");



class Brick extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(x, y, v, width, height) {
    super(x, y, v)
    this.width = width;
    this.height = height;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  static make_brick () {
    let randY = (Math.random() * 580);
    let randX = (1220);
    return (new Brick(randX, randY, 5.5, 60, 70))
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
}

/* harmony default export */ __webpack_exports__["default"] = (Brick);


/***/ }),

/***/ "./javascript/collidable.js":
/*!**********************************!*\
  !*** ./javascript/collidable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/* harmony default export */ __webpack_exports__["default"] = (Collidable);


/***/ }),

/***/ "./javascript/copters.js":
/*!*******************************!*\
  !*** ./javascript/copters.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./javascript/game.js");



const canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 616;
const c = canvas.getContext('2d');
let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](c, canvas);

game.paintIntro();

const startGame = () => {
  game.play();

  canvas.addEventListener('mousedown',() => {
    audio.play();
    game.lift()
  })

  canvas.addEventListener('mouseup',() => {
    audio.pause();
    audio.currentTime = 0 ;
    game.unlift()
  })
  canvas.removeEventListener('click', startGame)
};

let audio = document.getElementById('audio');
let nullAudio = {
  play: () => {},
  pause: () => {}
}
const toggle = document.getElementById('music-toggle')

toggle.addEventListener('click', () => {
  if (audio === nullAudio) {
    audio = document.getElementById('audio');
    toggle.classList.remove("fa-volume-off")
    toggle.classList.add("fa-volume-up")

  } else {
    audio = nullAudio
    toggle.classList.remove("fa-volume-up")
    toggle.classList.add("fa-volume-off")

  }
})

canvas.addEventListener('click', startGame);


/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helicopter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helicopter */ "./javascript/helicopter.js");
/* harmony import */ var _heli_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heli_sprite */ "./javascript/heli_sprite.js");
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brick */ "./javascript/brick.js");
/* harmony import */ var _stalactite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stalactite */ "./javascript/stalactite.js");





class Game {

  constructor(c) {
    this.c = c;
    this.copter = new _helicopter__WEBPACK_IMPORTED_MODULE_0__["default"](250, 100, 0);
    this.sprite = new _heli_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](250, 100, 0)
    this.floor = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"](0, 616, 0, 1000, 20);
    this.ceiling = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"](0, -20, 0, 1000, 20);
    this.bricks = _brick__WEBPACK_IMPORTED_MODULE_2__["default"].init_bricks();
    this.score = 0;
    this.highScore = 0;
    this.stalactite = new _stalactite__WEBPACK_IMPORTED_MODULE_3__["default"](1800, 0);

    this.alive = this.alive.bind(this);
    this.animate = this.animate.bind(this);
    this.lift = this.lift.bind(this);
    this.replay = this.replay.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    let currentBrick = this.bricks[0];
    this.c.clearRect(0,0, 1200, 640);

    this.c.font="28px arial";
    this.c.fillText(`Score: ${this.score}`, 50, 50)

    this.copter.move(this.c);

    if (currentBrick.x < -25){
      this.bricks.shift();
      this.bricks.push(_brick__WEBPACK_IMPORTED_MODULE_2__["default"].make_brick())
    }

    if (this.stalactite.x < -25) {
      this.stalactite.reset()
    }

    this.move_all();

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

    this.stalactite.move(this.c)
  }

  lift() {
    this.copter.lift();
  }

  unlift() {
    this.copter.unlift();
  }

  paintIntro (){
    this.c.font="40px Sans Serif";
    this.c.fillStyle="white"
    this.c.fillText(`Instructions`, 500, 210)
    this.c.font="28px Sans Serif";
    this.c.fontStyle="white"
    this.c.fillText(`Click to start the game`, 450, 310)
    this.c.font="28px Sans Serif";
    this.c.fontStyle="white"
    this.c.fillText(`Click and hold on your mouse to lift the copter`, 290, 350)
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
    this.c.fillText(`Click to play again`, 440, 330)

    setTimeout(() => {
      canvas.addEventListener('click', this.replay)
    }, 700)
  }

  replay() {
    this.score = 0;

    this.copter = new _helicopter__WEBPACK_IMPORTED_MODULE_0__["default"](250, 100, 0);
    this.bricks = _brick__WEBPACK_IMPORTED_MODULE_2__["default"].init_bricks();
    this.stalactite = new _stalactite__WEBPACK_IMPORTED_MODULE_3__["default"](1500, 0);

    canvas.removeEventListener('click', this.replay)
    this.play();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./javascript/heli_sprite.js":
/*!***********************************!*\
  !*** ./javascript/heli_sprite.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");


let copter = new Image();
copter.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/helicopter_sprites.png"

class HeliSprite extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"]{

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

/* harmony default export */ __webpack_exports__["default"] = (HeliSprite);


/***/ }),

/***/ "./javascript/helicopter.js":
/*!**********************************!*\
  !*** ./javascript/helicopter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collidable */ "./javascript/collidable.js");



class Helicopter extends _collidable__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(x, y, v) {
    super(x, y, v)

    let img = new Image();
    img.src = "https://raw.githubusercontent.com/VietnameseCoffee/copters/master/imports/helicopter_sprites.png"

    this.width = 90;
    this.height = 47;
    this.g = 0.33;
    this.img = img

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.frame = 0;
    this.tick = 0;
  }

  draw(c) {

    c.drawImage(this.img, 0, 0, 423, 150, this.x, this.y, 90, 47)
    // fuselage
    // c.beginPath();
    // c.fillStyle = "#697777";
    // c.fillRect((this.x+30),(this.y+15), 48, 25);
    // c.stroke();
    // c.beginPath();
    // c.strokeRect((this.x+30),(this.y+15), 48, 25);
    // c.stroke();
    //
    // // landing skids
    // c.beginPath();
    // c.fillStyle = "#697777";
    // c.fillRect((this.x+24), (this.y+43), 65, 3);
    // c.fill();
    // c.stroke();
    // c.beginPath();
    // c.strokeRect((this.x+24), (this.y+43), 65, 3);
    // c.stroke();
    // // tail boom
    // c.beginPath();
    // c.fillStyle = "#697777";
    // c.fillRect((this.x+8), (this.y+26), 22, 7);
    // c.stroke();
    // c.beginPath();
    // c.strokeRect((this.x+8), (this.y+26), 22, 7);
    // c.stroke();
    // // steering blades
    // c.beginPath();
    // c.arc((this.x+8), (this.y+26),6,0,2*Math.PI);
    // c.fillStyle = "#5dd8d8";
    // c.fill();
    // c.stroke();
    // // blades
    // c.beginPath();
    // c.ellipse((this.x + 52), (this.y + 12), 40, 10, 0, 0, 2*Math.PI);
    // c.fillStyle = "#5dd8d8";
    // c.fill();
    // c.stroke();
    // // box
    // c.beginPath();
    // c.strokeRect((this.x), (this.y), 92, 47);
    // c.stroke();
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
}

/* harmony default export */ __webpack_exports__["default"] = (Helicopter);


/***/ }),

/***/ "./javascript/stalactite.js":
/*!**********************************!*\
  !*** ./javascript/stalactite.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ "./javascript/brick.js");


class Stalactite extends _brick__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(x) {
    super(x)
    this.v = 4.2;

    this.top = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, 0, this.v, 50, 69 )
    this.mid1 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 6, 69, this.v, 37.5, 60)
    this.mid2 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 13, 129, this.v, 25, 55 )
    this.tip = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 19, 184, this.v, 12, 60 )

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
    // console.log(this.top.x)
    this.x = 1300 + (Math.random() * 5000);
    this.top = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, 0, this.v, 50, 69 )
    this.mid1 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 6, 69, this.v, 37.5, 60)
    this.mid2 = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 13, 129, this.v, 25, 55 )
    this.tip = new _brick__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + 19, 184, this.v, 12, 60 )
    this.arr = [this.top, this.mid1, this.mid2, this.tip]
  }


}

/* harmony default export */ __webpack_exports__["default"] = (Stalactite);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map