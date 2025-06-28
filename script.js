// script.js – for future interactivity and enhancements

// Optional: scroll into view animations, navigation, etc.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const certs = document.querySelectorAll(".cert");
let current = 0;

function updateCarousel() {
  certs.forEach((cert, i) => {
    cert.classList.remove("active");
    cert.style.order = (i - current + certs.length) % certs.length;
  });
  certs[current].classList.add("active");
}

document.getElementById("prevCert").addEventListener("click", () => {
  current = (current - 1 + certs.length) % certs.length;
  updateCarousel();
});

document.getElementById("nextCert").addEventListener("click", () => {
  current = (current + 1) % certs.length;
  updateCarousel();
});

updateCarousel(); // initialize on load
