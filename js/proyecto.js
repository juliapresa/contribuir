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

  const fadeItems = document.querySelectorAll('.fade-item');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.15 });

  fadeItems.forEach(item => fadeObserver.observe(item));

  // Carga del video embebido al hacer click en la miniatura
  document.querySelectorAll('.video-thumb[data-video-id]').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      const id = thumb.getAttribute('data-video-id');
      if (!id) return;
      // crear iframe y reemplazar la miniatura
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      // ajustar contenedor
      thumb.innerHTML = '';
      thumb.appendChild(iframe);
    });
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
