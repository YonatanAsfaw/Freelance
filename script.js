// Entry screen functionality
const introScreen = document.getElementById('intro-screen');
const mainSite = document.getElementById('main-site');
const enterBtn = document.getElementById('enter-site');

enterBtn.addEventListener('click', () => {
  introScreen.style.opacity = 0;
  setTimeout(() => {
    introScreen.style.display = 'none';
    mainSite.style.opacity = 1;
  }, 800);
});

// Scroll-based fade-in
const fadeElements = document.querySelectorAll('section, .hero-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 1s ease, transform 1s ease';
  observer.observe(el);
});

// Click-to-enlarge gallery images
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay-modal";
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  });
});

const style = document.createElement("style");
style.innerHTML = `
.overlay-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.overlay-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(212,175,55,0.3);
}
`;
document.head.appendChild(style);
