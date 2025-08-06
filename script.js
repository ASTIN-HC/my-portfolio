document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Typing animation
  const typedText = document.getElementById("typed-text");
  const words = ["Hi, I'm Astin.", "Engineer. Innovator. Gearhead."];
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 80);
    } else {
      setTimeout(() => {
        typedText.textContent = "";
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        type();
      }, 1500);
    }
  }

  type();

  // Fade-slide animation on cards
  const fadeSlides = document.querySelectorAll(".fade-slide");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeSlides.forEach(card => observer.observe(card));
});
