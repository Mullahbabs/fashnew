document.addEventListener("DOMContentLoaded", function () {
  // Sample Designers Data
  const designersData = [
    {
      id: 1,
      name: "Maria Chen",
      brand: "MC Sustainable",
      image: "images/urban1.jpg",
      rating: 4.9,
      experience: "8 years",
      category: "sustainable",
      bio: "Pioneer in zero-waste fashion design with collections featured in Paris and Milan Fashion Weeks.",
      location: "Shanghai • New York",
      specialties: ["Silk manipulation", "Organic dyes", "Modular design"],
      collections: 12,
    },
    {
      id: 2,
      name: "James Okafor",
      brand: "Okafor Originals",
      image: "images/urban2.jpg",
      rating: 4.7,
      experience: "6 years",
      category: "luxury",
      bio: "African-inspired luxury wear combining traditional textiles with contemporary silhouettes.",
      location: "Lagos • London",
      specialties: ["Ankara fabrics", "Beadwork", "Tailoring"],
      collections: 8,
    },
    // Add 18 more designers following the same structure...
    // Total of 20 designers (4 columns x 5 rows)
  ];

  // Initialize the page
  const designersGrid = document.getElementById("designersGrid");
  const designerModal = document.getElementById("designerModal");
  const modalContainer = designerModal.querySelector(".modal-container");

  // Render designer cards
  function renderDesignerCards() {
    designersGrid.innerHTML = "";
    designersData.forEach((designer) => {
      const card = document.createElement("div");
      card.className = "designer-card";
      card.innerHTML = `
                <div class="designer-card-image">
                    <img src="${designer.image}" alt="${designer.name}">
                </div>
                <div class="designer-card-content">
                    <h3 class="designer-card-name">${designer.name}</h3>
                    <p class="designer-card-brand">${designer.brand}</p>
                    <div class="designer-card-meta">
                        <div class="designer-card-rating">
                            ${"★".repeat(
                              Math.floor(designer.rating)
                            )}${"☆".repeat(5 - Math.floor(designer.rating))}
                        </div>
                        <span class="designer-card-experience">${
                          designer.experience
                        }</span>
                    </div>
                    <button class="designer-card-btn" data-id="${
                      designer.id
                    }">View Profile</button>
                </div>
            `;
      designersGrid.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll(".designer-card-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const designerId = parseInt(this.getAttribute("data-id"));
        openDesignerModal(designerId);
      });
    });
  }

  // Open modal with designer details
  function openDesignerModal(designerId) {
    const designer = designersData.find((d) => d.id === designerId);
    if (!designer) return;

    modalContainer.innerHTML = `
            <button class="modal-close-btn">&times;</button>
            <div class="designer-modal-content">
                <div class="designer-modal-header">
                    <div class="designer-modal-image">
                        <img src="${designer.image}" alt="${designer.name}">
                    </div>
                    <div class="designer-modal-info">
                        <h2>${designer.name}</h2>
                        <p class="designer-modal-brand">${designer.brand}</p>
                        <div class="designer-modal-meta">
                            <span class="designer-modal-rating">
                                ${"★".repeat(
                                  Math.floor(designer.rating)
                                )}${"☆".repeat(5 - Math.floor(designer.rating))}
                                ${designer.rating}
                            </span>
                            <span class="designer-modal-location">📍 ${
                              designer.location
                            }</span>
                            <span class="designer-modal-experience">${
                              designer.experience
                            } experience</span>
                        </div>
                    </div>
                </div>
                
                <div class="designer-modal-body">
                    <section class="designer-modal-section">
                        <h3>About</h3>
                        <p>${designer.bio}</p>
                    </section>
                    
                    <section class="designer-modal-section">
                        <h3>Specialties</h3>
                        <div class="specialties-list">
                            ${designer.specialties
                              .map(
                                (spec) =>
                                  `<span class="specialty-tag">${spec}</span>`
                              )
                              .join("")}
                        </div>
                    </section>
                    
                    <section class="designer-modal-section">
                        <h3>Collections (${designer.collections})</h3>
                        <div class="collections-preview">
                            <!-- Collection preview items would go here -->
                            <p>View all collections by this designer</p>
                        </div>
                    </section>
                </div>
                
                <div class="designer-modal-footer">
                    <button class="btn btn-primary">View Collections</button>
                    <button class="btn btn-outline">Contact Designer</button>
                </div>
            </div>
        `;

    // Add close button functionality
    modalContainer
      .querySelector(".modal-close-btn")
      .addEventListener("click", closeDesignerModal);
    designerModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Close modal
  function closeDesignerModal() {
    designerModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Close modal when clicking outside content
  designerModal
    .querySelector(".modal1-overlay")
    .addEventListener("click", closeDesignerModal);

  // Initialize page
  renderDesignerCards();

  // Search functionality
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredDesigners = designersData.filter(
      (designer) =>
        designer.name.toLowerCase().includes(searchTerm) ||
        designer.brand.toLowerCase().includes(searchTerm)
    );
    // You would update the grid with filtered results
  });

  // Filter functionality
  const filterSelect = document.querySelector(".filter-select");
  filterSelect.addEventListener("change", function () {
    const filterValue = this.value;
    if (filterValue === "all") {
      renderDesignerCards();
    } else {
      const filteredDesigners = designersData.filter(
        (designer) => designer.category === filterValue
      );
      // You would update the grid with filtered results
    }
  });
});
