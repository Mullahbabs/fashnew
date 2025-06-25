document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.querySelector(".preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 500);
  });

  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  html.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.querySelector(".toggle-icon").textContent =
      newTheme === "dark" ? "🌞" : "🦴";
  });

  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Cart
  let cartCount = parseInt(localStorage.getItem("cartCount") || "0");
  const cartCountElement = document.querySelector(".cart-count");
  cartCountElement.textContent = cartCount;

  document.querySelectorAll(".btn:not(.btn-outline)").forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
      localStorage.setItem("cartCount", cartCount);
      cartCountElement.classList.add("pulse");
      setTimeout(() => cartCountElement.classList.remove("pulse"), 300);
    });
  });

  // Wishlist (Header)
  let wishlistCount = parseInt(localStorage.getItem("wishlistCount") || "0");
  const wishlistBtn = document.querySelector(".wishlist-btn");
  const wishlistCountElement = document.querySelector(".wishlist-count");
  wishlistCountElement.textContent = wishlistCount;

  wishlistBtn.addEventListener("click", () => {
    wishlistBtn.classList.toggle("active");
    wishlistCount = wishlistBtn.classList.contains("active")
      ? wishlistCount + 1
      : wishlistCount - 1;
    wishlistCountElement.textContent = wishlistCount;
    localStorage.setItem("wishlistCount", wishlistCount);
    wishlistCountElement.classList.add("pulse");
    setTimeout(() => wishlistCountElement.classList.remove("pulse"), 300);
  });

  // Debounce Utility
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Hero Carousel
  const initHeroCarousel = () => {
    const container = document.querySelector(".hero-carousel .carousel-inner");
    const items = document.querySelectorAll(".hero-carousel .carousel-item");
    const prevBtn = document.querySelector(".hero-carousel .carousel-btn.prev");
    const nextBtn = document.querySelector(".hero-carousel .carousel-btn.next");
    const indicatorsContainer = document.querySelector(
      ".hero-carousel .carousel-indicators"
    );
    let currentIndex = 0;
    let interval = null;
    let isTransitioning = false;

    const updateCarousel = () => {
      if (isTransitioning) return;
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
      container.style.transition = "transform 0.5s ease";
      indicatorsContainer
        .querySelectorAll("span")
        .forEach((span, i) =>
          span.classList.toggle("active", i === currentIndex)
        );
    };

    const goTo = (index) => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = (index + items.length) % items.length;
      updateCarousel();
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    };

    const next = debounce(() => goTo(currentIndex + 1), 100);
    const prev = debounce(() => goTo(currentIndex - 1), 100);

    const startAutoPlay = () => {
      interval = setInterval(next, 5000);
    };

    const stopAutoPlay = () => clearInterval(interval);

    items.forEach((_, i) => {
      const span = document.createElement("span");
      span.classList.toggle("active", i === 0);
      span.setAttribute("aria-label", `Go to slide ${i + 1}`);
      span.addEventListener("click", () => {
        stopAutoPlay();
        goTo(i);
        startAutoPlay();
      });
      indicatorsContainer.appendChild(span);
    });

    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prev();
      startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      next();
      startAutoPlay();
    });

    container.parentElement.addEventListener("mouseenter", stopAutoPlay);
    container.parentElement.addEventListener("mouseleave", startAutoPlay);

    document.addEventListener("keydown", (e) => {
      if (document.activeElement.closest(".hero-carousel")) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    });

    let touchStartX = 0;
    container.addEventListener(
      "touchstart",
      (e) => (touchStartX = e.touches[0].clientX)
    );
    container.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) next();
      if (touchEndX - touchStartX > 50) prev();
    });

    startAutoPlay();
    updateCarousel();
  };

  if (document.querySelector(".hero-carousel")) initHeroCarousel();

  // Reseller Carousel
  const initResellerCarousel = () => {
    const container = document.querySelector(
      ".reseller-carousel .carousel-inner"
    );
    const originalItems = document.querySelectorAll(
      ".reseller-carousel .carousel-item"
    );
    const prevBtn = document.querySelector(
      ".reseller-carousel .carousel-btn.prev"
    );
    const nextBtn = document.querySelector(
      ".reseller-carousel .carousel-btn.next"
    );
    const indicatorsContainer = document.querySelector(
      ".reseller-carousel .carousel-indicators"
    );
    let currentIndex = 0;
    let interval = null;
    let isTransitioning = false;
    const visibleItems = 4;
    const totalItems = 6;

    // Clone items for infinite loop
    const cloneItems = () => {
      const clonesEnd = [];
      const clonesStart = [];
      for (let i = 0; i < visibleItems; i++) {
        clonesEnd.push(originalItems[i].cloneNode(true));
      }
      for (let i = totalItems - visibleItems; i < totalItems; i++) {
        clonesStart.push(originalItems[i].cloneNode(true));
      }
      clonesStart.reverse().forEach((clone) => container.prepend(clone));
      clonesEnd.forEach((clone) => container.appendChild(clone));
    };

    const updateCarousel = () => {
      if (isTransitioning) return;
      const offset = currentIndex * (100 / visibleItems);
      container.style.transform = `translateX(-${
        offset + (100 / visibleItems) * visibleItems
      }%)`;
      container.style.transition = "transform 0.5s ease";
      const normalizedIndex =
        ((currentIndex % totalItems) + totalItems) % totalItems;
      indicatorsContainer
        .querySelectorAll("span")
        .forEach((span, i) =>
          span.classList.toggle("active", i === normalizedIndex)
        );
    };

    const goTo = (index) => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = index;
      updateCarousel();
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    };

    const next = debounce(() => {
      currentIndex++;
      updateCarousel();
      if (currentIndex >= totalItems) {
        setTimeout(() => {
          container.style.transition = "none";
          currentIndex = 0;
          updateCarousel();
          container.style.transition = "transform 0.5s ease";
        }, 500);
      }
    }, 100);

    const prev = debounce(() => {
      currentIndex--;
      updateCarousel();
      if (currentIndex < 0) {
        setTimeout(() => {
          container.style.transition = "none";
          currentIndex = totalItems - 1;
          updateCarousel();
          container.style.transition = "transform 0.5s ease";
        }, 500);
      }
    }, 100);

    const startAutoPlay = () => {
      interval = setInterval(next, 4000);
    };

    const stopAutoPlay = () => clearInterval(interval);

    for (let i = 0; i < totalItems; i++) {
      const span = document.createElement("span");
      span.classList.toggle("active", i === 0);
      span.setAttribute("aria-label", `Go to slide ${i + 1}`);
      span.addEventListener("click", () => {
        stopAutoPlay();
        goTo(i);
        startAutoPlay();
      });
      indicatorsContainer.appendChild(span);
    }

    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prev();
      startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      next();
      startAutoPlay();
    });

    container.parentElement.addEventListener("mouseenter", stopAutoPlay);
    container.parentElement.addEventListener("mouseleave", startAutoPlay);

    document.querySelectorAll(".reseller-card").forEach((card) => {
      card.addEventListener("mouseenter", stopAutoPlay);
      card.addEventListener("mouseleave", startAutoPlay);
    });

    document.addEventListener("keydown", (e) => {
      if (document.activeElement.closest(".reseller-carousel")) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    });

    let touchStartX = 0;
    container.addEventListener(
      "touchstart",
      (e) => (touchStartX = e.touches[0].clientX)
    );
    container.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) next();
      if (touchEndX - touchStartX > 50) prev();
    });

    cloneItems();
    // Rebind like buttons after cloning
    let likedItems = JSON.parse(localStorage.getItem("likedItems") || "{}");
    const bindLikeButtons = () => {
      document
        .querySelectorAll(".reseller-carousel .like-btn")
        .forEach((btn, index) => {
          const itemId = `reseller-${index % totalItems}`;
          if (likedItems[itemId]) btn.classList.add("active");
          btn.addEventListener(
            "click",
            () => {
              btn.classList.toggle("active");
              likedItems[itemId] = btn.classList.contains("active");
              localStorage.setItem("likedItems", JSON.stringify(likedItems));
              wishlistCount = Object.values(likedItems).filter(Boolean).length;
              wishlistCountElement.textContent = wishlistCount;
              localStorage.setItem("wishlistCount", wishlistCount);
              wishlistCountElement.classList.add("pulse");
              setTimeout(
                () => wishlistCountElement.classList.remove("pulse"),
                300
              );
            },
            { once: true }
          );
        });
    };
    bindLikeButtons();
    startAutoPlay();
    updateCarousel();
  };

  if (document.querySelector(".reseller-carousel")) initResellerCarousel();

  // Navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      if (nav.classList.contains("active")) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });

  // Search
  document.querySelector(".search-btn").addEventListener("click", () => {
    alert("Search functionality to be implemented with backend support");
  });

  // Outfit Design
  const outfitForm = document.querySelector("#outfit-form");
  const designModal = document.querySelector("#design-modal");
  const modalCloseButtons = document.querySelectorAll(
    "#modal-close-btn, .modal-close"
  );

  if (outfitForm && designModal) {
    outfitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const design = {
        top: document.getElementById("top").value,
        bottom: document.getElementById("bottom").value,
        color: document.getElementById("color").value,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("lastDesign", JSON.stringify(design));
      designModal.style.display = "flex";
      outfitForm.reset();
    });

    modalCloseButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        designModal.style.display = "none";
      });
    });
  }
});
