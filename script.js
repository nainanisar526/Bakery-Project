document.addEventListener("DOMContentLoaded", () => {
  /* =================== HAMBURGER MENU =================== */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* =================== MOBILE SCROLL ANIMATION =================== */
  // Only run if window width is mobile, or just let CSS media queries handle the visual part.
  // Ideally, we always add the class, and CSS decides if it does anything.
  const cards = document.querySelectorAll('.product-cards .card');
  const productContainer = document.querySelector('.product-cards');

  if (cards.length > 0 && productContainer) {
    const observerOptions = {
      root: productContainer, // Monitor intersection relative to the scroll container
      threshold: 0.6 // Trigger when 60% of card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
  }
});
