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
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      game.shoot();
    }
}
canvas.addEventListener('click', startGame);
