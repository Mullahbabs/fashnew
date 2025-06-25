document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  // Check for saved theme preference or use preferred color scheme
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  html.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update toggle icon
    const icon = themeToggle.querySelector(".toggle-icon");
    icon.textContent = newTheme === "dark" ? "🌞" : "🌓";
  });

  // Initialize cart count
  let cartCount = 0;
  const cartCountElement = document.querySelector(".cart-count");

  // Simulate adding to cart
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("btn") &&
        !e.target.classList.contains("btn-outline")
      ) {
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Add animation
        cartCountElement.classList.add("pulse");
        setTimeout(() => {
          cartCountElement.classList.remove("pulse");
        }, 300);
      }
    });
  });

  // Carousel functionality
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  let currentSlide = 0;
  const slideCount = slides.length;

  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".carousel-indicators span");

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  function goToSlide(slideIndex) {
    currentSlide = (slideIndex + slideCount) % slideCount;
    updateCarousel();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Auto-advance carousel
  let carouselInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(nextSlide, 5000);
  });

  // Initialize
  updateCarousel();

  // Navigation active state
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Search functionality (simulated)
  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", function () {
    alert(
      "Search functionality would be implemented here with backend support"
    );
  });
});
