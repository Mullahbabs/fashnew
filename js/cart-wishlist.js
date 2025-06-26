document.addEventListener("DOMContentLoaded", function () {
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
});
