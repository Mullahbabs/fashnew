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

  // Navigation active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      // Link will now navigate to href
    });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only prevent default if we're handling the transition
      if (!this.href.includes("#") && this.href !== window.location.href) {
        e.preventDefault();

        // Update active class
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        // Close mobile menu if open
        if (window.innerWidth < 768) {
          document.querySelector(".hamburger").classList.remove("active");
          document.querySelector(".nav").classList.remove("active");
        }

        // Start page transition
        document.body.classList.add("transition-out");
        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      }
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
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other open FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Optional: Open first FAQ by default
  // faqItems[0].classList.add('active');
});
