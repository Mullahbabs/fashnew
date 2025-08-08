document.addEventListener("DOMContentLoaded", function () {
  // Initialize wishlist and cart
  const wishlist = [];
  const cart = [];

  // DOM Elements
  const navWishlistBtn = document.querySelector(
    ".wishlist-btn:not(.product-actions .wishlist-btn)"
  );
  const navWishlistCount = document.querySelector(
    ".wishlist-btn:not(.product-actions .wishlist-btn) .wishlist-count"
  );
  const productWishlistBtns = document.querySelectorAll(
    ".product-actions .wishlist-btn"
  );
  const navCartBtn = document.querySelector(".cart-btn");
  const navCartCount = document.querySelector(".cart-count");
  const cartBtns = document.querySelectorAll(".add-to-cart");
  const cartModal = document.querySelector(".cart-modal-container");
  const wishlistModal = document.querySelector(".wishlist-modal-container");

  // Event Listeners
  navWishlistBtn.addEventListener("click", openWishlistModal);
  document
    .querySelector(".close-wishlist-modal")
    .addEventListener("click", closeWishlistModal);
  document
    .querySelector(".wishlist-modal-overlay")
    .addEventListener("click", closeWishlistModal);

  navCartBtn.addEventListener("click", openCartModal);
  document
    .querySelector(".close-cart-modal")
    .addEventListener("click", closeCartModal);
  document
    .querySelector(".cart-modal-overlay")
    .addEventListener("click", closeCartModal);

  // Add event listeners to all product wishlist buttons
  productWishlistBtns.forEach((btn) => {
    btn.addEventListener("click", handleWishlistClick);
  });

  // Add event listeners to all add to cart buttons
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", handleAddToCart);
  });

  // Close modals when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeWishlistModal();
      closeCartModal();
    }
  });

  // Functions
  function openWishlistModal() {
    updateWishlistModal();
    wishlistModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeWishlistModal() {
    wishlistModal.style.display = "none";
    document.body.style.overflow = "";
  }

  function openCartModal() {
    updateCartModal();
    cartModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeCartModal() {
    cartModal.style.display = "none";
    document.body.style.overflow = "";
  }

  function handleWishlistClick(e) {
    e.preventDefault();
    const productCard = this.closest(".product-card");
    const productId =
      productCard.dataset.id || Math.random().toString(36).substr(2, 9);
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = productCard.querySelector("p").textContent;
    const productImage = productCard.querySelector("img").src;

    const product = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
    };

    const index = wishlist.findIndex((item) => item.id === productId);

    if (index === -1) {
      wishlist.push(product);
      this.classList.add("active");
      this.querySelector(".heart-icon").style.fill = "red";
    } else {
      wishlist.splice(index, 1);
      this.classList.remove("active");
      this.querySelector(".heart-icon").style.fill = "";
    }

    updateWishlistCount();
  }

  function handleAddToCart() {
    const productCard = this.closest(".product-card");
    const productId =
      productCard.dataset.id || Math.random().toString(36).substr(2, 9);
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = parseFloat(
      productCard.querySelector("p").textContent.replace("$", "")
    );
    const productImage = productCard.querySelector("img").src;

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1,
      });
    }

    updateCartModal();

    // Show added to cart notification
    const notification = document.createElement("div");
    notification.textContent = `${productName} added to cart`;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "4px";
    notification.style.zIndex = "10000";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transition = "opacity 0.5s";
      setTimeout(() => notification.remove(), 500);
    }, 2000);
  }

  function updateWishlistCount() {
    navWishlistCount.textContent = wishlist.length;
  }

  function updateWishlistModal() {
    const wishlistItemsContainer = document.querySelector(".wishlist-items");
    wishlistItemsContainer.innerHTML = "";

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }

    wishlist.forEach((item) => {
      const wishlistItem = document.createElement("div");
      wishlistItem.className = "wishlist-item";
      wishlistItem.innerHTML = `
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 1rem;">
          <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      wishlistItemsContainer.appendChild(wishlistItem);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".wishlist-items .remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const index = wishlist.findIndex((item) => item.id === productId);

        if (index !== -1) {
          wishlist.splice(index, 1);
          updateWishlistModal();
          updateWishlistCount();

          // Update the heart icon on the product card
          const productCard = document.querySelector(
            `.product-card[data-id="${productId}"]`
          );
          if (productCard) {
            const wishlistBtn = productCard.querySelector(".wishlist-btn");
            wishlistBtn.classList.remove("active");
            wishlistBtn.querySelector(".heart-icon").style.fill = "";
          }
        }
      });
    });
  }

  function updateCartModal() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".total-amount");
    cartItemsContainer.innerHTML = "";

    // Calculate total items count
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += item.quantity;
    });

    // Update nav cart count
    navCartCount.textContent = totalItems;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = "0.00";
      return;
    }

    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${
        item.name
      }" style="width: 50px; height: 50px; object-fit: cover; margin-right: 1rem;">
          <div>
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div>
          <div class="cart-item-quantity">
            <button class="decrement-quantity" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="increment-quantity" data-id="${item.id}">+</button>
          </div>
          <p class="cart-item-price">$${itemTotal.toFixed(2)}</p>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);

    // Add event listeners to quantity buttons
    document.querySelectorAll(".increment-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const item = cart.find((item) => item.id === productId);
        if (item) {
          item.quantity += 1;
          updateCartModal();
        }
      });
    });

    document.querySelectorAll(".decrement-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const item = cart.find((item) => item.id === productId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          updateCartModal();
        }
      });
    });

    document.querySelectorAll(".cart-items .remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const index = cart.findIndex((item) => item.id === productId);

        if (index !== -1) {
          cart.splice(index, 1);
          updateCartModal();
        }
      });
    });
  }
});
