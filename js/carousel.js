document.addEventListener("DOMContentLoaded", function () {
  // Main Carousel functionality
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

  // Product Carousel functionality
  const productCarousel = document.querySelector(".product-carousel");
  const productCards = document.querySelectorAll(".product-card");
  const productPrevBtn = document.querySelector(".product-carousel-prev");
  const productNextBtn = document.querySelector(".product-carousel-next");
  const productIndicatorsContainer = document.querySelector(
    ".product-carousel-indicators"
  );

  let productCurrentSlide = 0;
  const cardCount = productCards.length; // 6 cards
  const cardsPerView = 3;
  const totalSlides = 4; // Explicitly set to 4 slides

  // Create indicators for each slide
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("span");
    indicator.addEventListener("click", () => goToProductSlide(i));
    productIndicatorsContainer.appendChild(indicator);
  }

  const productIndicators = document.querySelectorAll(
    ".product-carousel-indicators span"
  );

  function updateProductCarousel() {
    // Calculate the translateX offset based on the current slide
    const offset = -productCurrentSlide * (100 / cardsPerView);
    productCarousel.style.transform = `translateX(${offset}%)`;

    // Update indicators
    productIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === productCurrentSlide);
    });
  }

  function goToProductSlide(slideIndex) {
    // Ensure slideIndex stays within bounds (0 to totalSlides - 1)
    productCurrentSlide = slideIndex;
    if (productCurrentSlide >= totalSlides) {
      productCurrentSlide = 0; // Reset to first slide after last
    } else if (productCurrentSlide < 0) {
      productCurrentSlide = totalSlides - 1; // Go to last slide if negative
    }
    updateProductCarousel();
  }

  function nextProductSlide() {
    // Move to next slide, reset to 0 if at the end
    productCurrentSlide = (productCurrentSlide + 1) % totalSlides;
    updateProductCarousel();
  }

  function prevProductSlide() {
    // Move to previous slide, loop to last slide if at the start
    productCurrentSlide = (productCurrentSlide - 1 + totalSlides) % totalSlides;
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

  // Initialize
  updateProductCarousel();
});
