// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate-up').forEach((el) => {
  observer.observe(el);
});

// Add stagger delays to stat cards and skill chips
document.querySelectorAll('.stat-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.skill-chip').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.05}s`;
});

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(13,7,24,0.95)';
  } else {
    nav.style.background = 'rgba(13,7,24,0.7)';
  }
});
