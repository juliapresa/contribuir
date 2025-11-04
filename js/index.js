const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoId = thumb.dataset.videoId;
      thumb.innerHTML = `
        <iframe 
          width="100%" 
          height="215" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
          title="YouTube video" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    });
  });