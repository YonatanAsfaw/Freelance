document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  });
});

const style = document.createElement("style");
style.innerHTML = `
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.overlay img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
`;
document.head.appendChild(style);
