const myCanvas = document.getElementById("barra");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

const WIDTH = 516;
const HEIGHT = 550;
const FACTOR = 0.25;

let context = myCanvas.getContext("2d");


const player = {
    url: "./imagnes/Plataforma.png",
    x: (WIDTH / 2) - 50,
    y: HEIGHT - 150,
    speed: 15
  };
  
  
  function update() {
    console.log("update");
    requestAnimationFrame(render);
    requestAnimationFrame(update);
  }
  
  function render() {
    clearRect(context);
    drawImage(context, player);
  }
  
  addEventListener("keydown", (event) => {
    let isLeft = event.key === "ArrowLeft";
    let isRight = event.key === "ArrowRight";
  
    if (isLeft) {
      player.x -= player.speed * FACTOR;
    }
    if (isRight) {
      player.x += player.speed * FACTOR;
    }
  });

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
