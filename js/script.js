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

document.addEventListener("DOMContentLoaded", function () {
  // Product Carousel functionality
  const productCarousel = document.querySelector(".product-carousel");
  const productCards = document.querySelectorAll(".product-card");
  const productPrevBtn = document.querySelector(".product-carousel-prev");
  const productNextBtn = document.querySelector(".product-carousel-next");
  const productIndicatorsContainer = document.querySelector(
    ".product-carousel-indicators"
  );

  let productCurrentSlide = 0;
  const cardCount = productCards.length;
  const cardsPerView = 3;

  // Create indicators
  for (let i = 0; i < Math.ceil(cardCount / cardsPerView); i++) {
    const indicator = document.createElement("span");
    indicator.addEventListener("click", () => goToProductSlide(i));
    productIndicatorsContainer.appendChild(indicator);
  }

  const productIndicators = document.querySelectorAll(
    ".product-carousel-indicators span"
  );

  function updateProductCarousel() {
    const offset = -productCurrentSlide * (100 / cardsPerView);
    productCarousel.style.transform = `translateX(${offset}%)`;

    productIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === productCurrentSlide);
    });
  }

  function goToProductSlide(slideIndex) {
    productCurrentSlide = slideIndex % Math.ceil(cardCount / cardsPerView);
    updateProductCarousel();
  }

  function nextProductSlide() {
    productCurrentSlide =
      (productCurrentSlide + 1) % Math.ceil(cardCount / cardsPerView);
    updateProductCarousel();
  }

  function prevProductSlide() {
    productCurrentSlide =
      (productCurrentSlide - 1 + Math.ceil(cardCount / cardsPerView)) %
      Math.ceil(cardCount / cardsPerView);
    updateProductCarousel();
  }

  productPrevBtn.addEventListener("click", prevProductSlide);
  productNextBtn.addEventListener("click", nextProductSlide);

  // Auto-advance product carousel
  let productCarouselInterval = setInterval(nextProductSlide, 5000);

  // Pause on hover
  productCarousel.addEventListener("mouseenter", () => {
    clearInterval(productCarouselInterval);
  });

  productCarousel.addEventListener("mouseleave", () => {
    productCarouselInterval = setInterval(nextProductSlide, 5000);
  });

  // Wishlist functionality
  let wishlistCount = 0;
  const wishlistCountElements = document.querySelectorAll(".wishlist-count");

  document.querySelectorAll(".wishlist-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      if (!isActive) {
        wishlistCount++;
        this.classList.add("active");
        const countElement = this.querySelector(".wishlist-count");
        countElement.textContent = wishlistCount;
        countElement.classList.add("pulse");
        setTimeout(() => {
          countElement.classList.remove("pulse");
        }, 300);
      }
    });
  });

  // Initialize
  updateProductCarousel();
});
