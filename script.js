// Smooth fade-in when sections scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Click-to-enlarge image modal
document.querySelectorAll(".gallery img").forEach(img => {
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
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.overlay-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255,255,255,0.2);
}
`;
document.head.appendChild(style);

