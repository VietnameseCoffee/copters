import Helicopter from './helicopter';
import HeliSprite from './heli_sprite'
import Brick from './brick';
import Game from './game.js'


const canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 616;
const c = canvas.getContext('2d');
let game = new Game(c, canvas);

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

const audio = document.getElementById('audio');
canvas.addEventListener('click', startGame);
