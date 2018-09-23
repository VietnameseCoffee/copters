import Helicopter from './helicopter';
import HeliSprite from './heli_sprite'
import Brick from './brick';
import Game from './game.js'


const canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 616;
const c = canvas.getContext('2d');

let g = new Game(c);
g.paintIntro();

const startGame = () => {
  g.play();
  canvas.addEventListener('mousedown',() => {
    audio.play();
    g.lift()
  })
  canvas.addEventListener('mouseup',() => {
    audio.pause();
    audio.currentTime = 0 ;
    g.unlift()
  })
  canvas.removeEventListener('click', startGame)
};

const audio = document.getElementById('audio');
canvas.addEventListener('click', startGame);
