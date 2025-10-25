document.addEventListener('DOMContentLoaded', () => {
  const fadeItems = document.querySelectorAll('.fade-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeItems.forEach(item => observer.observe(item));
});
