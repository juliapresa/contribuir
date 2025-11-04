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
  // Botón "+ info" en móvil
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation(); // evita conflicto con el link
    const content = e.target.closest(".timeline-content");
    content.classList.toggle("active");
    btn.textContent = content.classList.contains("active") ? "− info" : "+ info";
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});