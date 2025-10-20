const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const button = card.querySelector(".card-btn");
  const extraInfo = card.querySelector(".extra-info");

  button.addEventListener("click", () => {
    const isVisible = extraInfo.style.display === "block";
    extraInfo.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Ver más" : "Ver menos";
  });
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
