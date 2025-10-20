const items = document.querySelectorAll('.timeline-content');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

items.forEach(item => observer.observe(item));

  // Detectar si es un dispositivo táctil
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  if (isTouchDevice) {
    document.querySelectorAll(".timeline-content").forEach(item => {
      item.addEventListener("click", () => {
        // Alternar clase activa al hacer clic
        item.classList.toggle("active");
      });
    });
  }
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});