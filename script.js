const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const level1 = [
  [],
  [],
  [],
  [],
  [],
  [],
  ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
  ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
  ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
  ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
  ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
  ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
  ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y'],
  ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y']
];

const colorMap = {
  'R': 'red',
  'O': 'orange',
  'G': 'green',
  'Y': 'yellow'
};

const brickGap = 2;
const brickWidth = 12;
const brickHeight = 8;


const wallSize = 12;
const bricks = [];


for (let row = 0; row < level1.length; row++) {
  for (let col = 0; col < level1[row].length; col++) {
    const colorCode = level1[row][col];

    bricks.push({
      x: wallSize + (brickWidth + brickGap) * col,
      y: wallSize + (brickHeight + brickGap) * row,
      color: colorMap[colorCode],
      width: brickWidth,
      height: brickHeight
    });
  }
}

const paddle = {
 
  x: canvas.width / 2 - brickWidth / 2,
  y: 440,
  width: brickWidth,
  height: brickHeight,

  dx: 0
};


function collides(obj1, obj2) {
  return obj1.x < obj2.x + obj2.width &&
         obj1.x + obj1.width > obj2.x &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y;
}


function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  paddle.x += paddle.dx;


  
  context.fillStyle = 'lightgrey';
  context.fillRect(0, 0, canvas.width, wallSize);
  context.fillRect(0, 0, wallSize, canvas.height);
  context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

  
  bricks.forEach(function(brick) {
    context.fillStyle = brick.color;
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
  });

  
  context.fillStyle = 'cyan';
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}


document.addEventListener('keydown', function(e) {

  if (e.which === 37) {
    paddle.dx = -3;
  }
 
  else if (e.which === 39) {
    paddle.dx = 3;
  }

  
});


document.addEventListener('keyup', function(e) {
  if (e.which === 37 || e.which === 39) {
    paddle.dx = 0;
  }
});


requestAnimationFrame(loop);

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // Reproducir la música de fondo cuando el juego comienza
    function startGame() {
        backgroundMusic.play();
        // Aquí puedes iniciar el juego Breakout
    }

    // Pausar la música de fondo cuando el juego se detiene
    function stopGame() {
        backgroundMusic.pause();
        // Aquí puedes detener el juego Breakout
    }

    startGame();
});
