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
