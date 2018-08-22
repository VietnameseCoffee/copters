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

  constructor(x, y, v) {
    super(x, y, v)
    this.width = 40;
    this.height = 70;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    c.beginPath();
    c.strokeRect((this.x),(this.y), this.width, this.height);
    c.stroke();
  }

  move(c) {
    this.x = this.x - this.v;
    this.draw(c)
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

    if (thisFront > objBack && thisBack < objFront) {
      console.log(thisBottom > objTop && thisTop < objBottom)
      return (thisBottom > objTop && thisTop < objBottom)
    }
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
/* harmony import */ var _helicopter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helicopter */ "./javascript/helicopter.js");
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick */ "./javascript/brick.js");



const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 640;
const c = canvas.getContext('2d');


class CoptersGame {

  constructor(c) {
    this.copter = new _helicopter__WEBPACK_IMPORTED_MODULE_0__["default"](150, 100, 0);
    this.c = c;
    this.brick = new _brick__WEBPACK_IMPORTED_MODULE_1__["default"](500, 250, 3);

    this.animate = this.animate.bind(this);
  }

  play() {
    this.animate();
  }

  animate() {
    this.c.clearRect(0,0, 1000, 640);

    this.copter.move(this.c);
    this.brick.move(this.c);



    if (!this.copter.didCollide(this.brick)) {
      requestAnimationFrame(this.animate);
    } else {
      // boombooms
      // game over show score
    }

  }

}

let g = new CoptersGame(c);

g.play();


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
    this.width = 90;
    this.height = 47;
    this.g = 0;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
  }

  draw(c) {
    // blades
    c.beginPath();
    c.ellipse((this.x + 52), (this.y + 12), 40, 10, 0, 0, 2*Math.PI);
    c.stroke();
    // fuselage
    c.beginPath();
    c.strokeRect((this.x+30),(this.y+15), 50, 25);
    c.stroke();
    // landing skids
    c.beginPath();
    c.strokeRect((this.x+24), (this.y+43), 65, 3);
    c.stroke();
    // tail boom
    c.beginPath();
    c.strokeRect((this.x+8), (this.y+26), 22, 7);
    c.stroke();
    // steering blades
    c.beginPath();
    c.arc((this.x+8), (this.y+26),6,0,2*Math.PI);
    c.stroke();
    // box
    // c.beginPath();
    // c.strokeRect((this.x), (this.y), 92, 47);
    // c.stroke();
  }

  move(c) {
    this.v = this.v + this.g;
    this.y = this.y + 0.8;

    this.draw(c);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Helicopter);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map