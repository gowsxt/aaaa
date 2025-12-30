const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const container = document.querySelector(".container");
const musica = document.getElementById("musica");

// Início da experiência
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  container.classList.remove("hidden");
  musica.play();
});

// Carrossel automático com fade
const fotos = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
  fotos[index].classList.remove("active");
  index = (index + 1) % fotos.length;
  fotos[index].classList.add("active");
}, 3500);
