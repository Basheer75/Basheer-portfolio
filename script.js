// script.js – updated for true one-at-a-time certificate carousel (no scrollbar)

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Certificate Carousel - One-at-a-time
const certs = document.querySelectorAll(".cert");
let current = 0;

function updateCarousel() {
  certs.forEach((cert, i) => {
    cert.classList.remove("active");
    cert.style.display = "none";
  });
  certs[current].classList.add("active");
  certs[current].style.display = "block";
}

document.getElementById("prevCert").addEventListener("click", () => {
  current = (current - 1 + certs.length) % certs.length;
  updateCarousel();
});

document.getElementById("nextCert").addEventListener("click", () => {
  current = (current + 1) % certs.length;
  updateCarousel();
});

updateCarousel(); // initialize carousel
