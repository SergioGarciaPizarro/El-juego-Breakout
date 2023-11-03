const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Cada fila tiene 14 ladrillos de largo. El nivel consta de 6 filas en blanco y luego 8 filas
//de 4 colores: rojo, naranja, verde y amarillo
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

// crear una asignación entre el código corto de color (R, O, G, Y) y el nombre de la color
const colorMap = {
  'R': 'red',
  'O': 'orange',
  'G': 'green',
  'Y': 'yellow'
};

// Usa un espacio de 2px entre cada ladrillo
const brickGap = 2;
const brickWidth = 12;
const brickHeight = 8;

// El ancho de la pared ocupa el espacio restante del ancho del lienzo. con 14 ladrillos
// y 13 espacios de 2px entre ellos, es decir: 400 - (14 * 25 + 2 * 13) = 24px. Por lo tanto, cada
// La pared será de 12px
const wallSize = 12;
const bricks = [];

// Crea el nivel haciendo un bucle sobre cada fila y columna de la matriz Level1
// y crear un objeto con la posición de los ladrillos (x, y) y el color
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

// Coloque la paleta horizontalmente en el centro de la pantalla
const paddle = {
 
  x: canvas.width / 2 - brickWidth / 2,
  y: 440,
  width: brickWidth,
  height: brickHeight,

  //Barra x Velocidad
  dx: 0
};

// comprobar si hay colisiones entre dos objetos mediante el cuadro delimitador alineado con el eje (AABB)
function collides(obj1, obj2) {
  return obj1.x < obj2.x + obj2.width &&
         obj1.x + obj1.width > obj2.x &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y;
}

// Bucle de juego
function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // Mueve la barra por su velocidad
  paddle.x += paddle.dx;
  
  // Dibuja muros
  context.fillStyle = 'lightgrey';
  context.fillRect(0, 0, canvas.width, wallSize);
  context.fillRect(0, 0, wallSize, canvas.height);
  context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

  // Dibujar ladrillos
  bricks.forEach(function(brick) {
    context.fillStyle = brick.color;
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
  });

  // draw paddle
  context.fillStyle = 'cyan';
  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// Escuchar eventos de teclado para mover la barra
document.addEventListener('keydown', function(e) {

  // tecla de flecha izquierda
  if (e.which === 37) {
    paddle.dx = -3;
  }
 
  // tecla de flecha derecha
  else if (e.which === 39) {
    paddle.dx = 3;
  }

  
});

// Escuche los eventos del teclado para detener la paleta si se suelta la tecla
document.addEventListener('keyup', function(e) {
  if (e.which === 37 || e.which === 39) {
    paddle.dx = 0;
  }
});

// iniciar juego
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
