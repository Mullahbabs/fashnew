// Collection Modal Controller
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("collectionModal");
  const modalProducts = modal.querySelector(".collection-modal-products");
  const modalTitle = modal.querySelector(".collection-modal-title");
  const modalCounter = modal.querySelector(".collection-modal-counter");
  const modalPrev = modal.querySelector(".collection-modal-prev");
  const modalNext = modal.querySelector(".collection-modal-next");
  const modalClose = modal.querySelector(".collection-modal-close");

  let currentCollectionIndex = 0;
  let collectionsData = [];

  function initializeCollections() {
    collectionsData = [
      {
        title: "Urban Elegance Collection",
        products: [
          {
            id: 1,
            name: "Silk Blouse",
            description: "Premium silk with floral patterns",
            price: "₦134,985",
            image: "images/urban1.jpg",
            rating: 4.5,
          },
          {
            id: 2,
            name: "Wide-Leg Trousers",
            description: "Linen blend for summer comfort",
            price: "₦98,985",
            image: "images/urban2.jpg",
            rating: 4.2,
          },
          {
            id: 3,
            name: "Tailored Blazer",
            description: "Structured fit with satin lining",
            price: "₦149,985",
            image: "images/urban3.jpg",
            rating: 4.7,
          },
          {
            id: 4,
            name: "Cashmere Sweater",
            description: "Soft cashmere for elegant layering",
            price: "₦119,985",
            image: "images/urban4.jpg",
            rating: 4.4,
          },
          {
            id: 5,
            name: "A-Line Skirt",
            description: "Chic midi skirt with pleated design",
            price: "₦89,985",
            image: "images/urban5.jpg",
            rating: 4.3,
          },
          {
            id: 6,
            name: "Velvet Dress",
            description: "Luxurious velvet for evening wear",
            price: "₦179,985",
            image: "images/urban6.jpg",
            rating: 4.8,
          },
          {
            id: 7,
            name: "Chiffon Top",
            description: "Flowy top with delicate embroidery",
            price: "₦104,985",
            image: "images/urban7.jpg",
            rating: 4.6,
          },
          {
            id: 8,
            name: "High-Waist Jeans",
            description: "Slim-fit denim with modern cut",
            price: "₦74,985",
            image: "images/urban8.jpg",
            rating: 4.1,
          },
          {
            id: 9,
            name: "Satin Trench Coat",
            description: "Elegant coat for all seasons",
            price: "₦194,985",
            image: "images/urban9.jpg",
            rating: 4.9,
          },
          {
            id: 10,
            name: "Knit Cardigan",
            description: "Cozy knit for casual elegance",
            price: "₦84,985",
            image: "images/urban10.jpg",
            rating: 4.3,
          },
          {
            id: 11,
            name: "Leather Belt",
            description: "Classic belt with gold buckle",
            price: "₦44,985",
            image: "images/urban11.jpg",
            rating: 4.0,
          },
          {
            id: 12,
            name: "Silk Scarf",
            description: "Vibrant scarf with elegant prints",
            price: "₦59,985",
            image: "images/urban12.jpg",
            rating: 4.4,
          },
          {
            id: 13,
            name: "Pleated Dress",
            description: "Sophisticated dress for formal events",
            price: "₦164,985",
            image: "images/urban13.jpg",
            rating: 4.7,
          },
          {
            id: 14,
            name: "Wool Coat",
            description: "Warm coat with tailored fit",
            price: "₦209,985",
            image: "images/urban14.jpg",
            rating: 4.8,
          },
          {
            id: 15,
            name: "Lace Top",
            description: "Intricate lace for a refined look",
            price: "₦114,985",
            image: "images/urban15.jpg",
            rating: 4.6,
          },
          // Add more products...
        ],
      },

      {
        title: "Streetwear Essentials",
        products: [
          {
            id: 1,
            name: "Graphic Tee",
            description: "Bold print cotton t-shirt",
            price: "₦59,985",
            image: "https://via.placeholder.com/300x200?text=Graphic+Tee",
            rating: 4.3,
          },
          {
            id: 2,
            name: "Cargo Pants",
            description: "Relaxed fit with multiple pockets",
            price: "₦89,985",
            image: "https://via.placeholder.com/300x200?text=Cargo+Pants",
            rating: 4.1,
          },
          {
            id: 3,
            name: "Hooded Sweatshirt",
            description: "Cozy hoodie with street vibe",
            price: "₦104,985",
            image: "https://via.placeholder.com/300x200?text=Hooded+Sweatshirt",
            rating: 4.5,
          },
          {
            id: 4,
            name: "Denim Jacket",
            description: "Rugged jacket with distressed details",
            price: "₦119,985",
            image: "https://via.placeholder.com/300x200?text=Denim+Jacket",
            rating: 4.4,
          },
          {
            id: 5,
            name: "Snapback Cap",
            description: "Classic cap with embroidered logo",
            price: "₦44,985",
            image: "https://via.placeholder.com/300x200?text=Snapback+Cap",
            rating: 4.0,
          },
          {
            id: 6,
            name: "Joggers",
            description: "Comfortable joggers for daily wear",
            price: "₦74,985",
            image: "https://via.placeholder.com/300x200?text=Joggers",
            rating: 4.2,
          },
          {
            id: 7,
            name: "Sneaker Boots",
            description: "Stylish boots for urban look",
            price: "₦134,985",
            image: "https://via.placeholder.com/300x200?text=Sneaker+Boots",
            rating: 4.6,
          },
          {
            id: 8,
            name: "Bomber Jacket",
            description: "Sleek jacket with ribbed cuffs",
            price: "₦149,985",
            image: "https://via.placeholder.com/300x200?text=Bomber+Jacket",
            rating: 4.7,
          },
          {
            id: 9,
            name: "Crewneck Sweatshirt",
            description: "Minimalist sweatshirt for layering",
            price: "₦94,985",
            image:
              "https://via.placeholder.com/300x200?text=Crewneck+Sweatshirt",
            rating: 4.3,
          },
          {
            id: 10,
            name: "Ripped Jeans",
            description: "Distressed jeans for bold style",
            price: "₦84,985",
            image: "https://via.placeholder.com/300x200?text=Ripped+Jeans",
            rating: 4.1,
          },
          {
            id: 11,
            name: "Bucket Hat",
            description: "Trendy hat for streetwear",
            price: "₦39,985",
            image: "https://via.placeholder.com/300x200?text=Bucket+Hat",
            rating: 4.0,
          },
          {
            id: 12,
            name: "Oversized Shirt",
            description: "Loose-fit shirt with vibrant prints",
            price: "₦69,985",
            image: "https://via.placeholder.com/300x200?text=Oversized+Shirt",
            rating: 4.4,
          },
          {
            id: 13,
            name: "Track Jacket",
            description: "Sporty jacket with retro vibe",
            price: "₦124,985",
            image: "https://via.placeholder.com/300x200?text=Track+Jacket",
            rating: 4.5,
          },
          {
            id: 14,
            name: "Chinos",
            description: "Slim-fit chinos for versatile wear",
            price: "₦79,985",
            image: "https://via.placeholder.com/300x200?text=Chinos",
            rating: 4.2,
          },
          {
            id: 15,
            name: "Backpack",
            description: "Functional bag for urban adventures",
            price: "₦64,985",
            image: "https://via.placeholder.com/300x200?text=Backpack",
            rating: 4.3,
          },
        ],
      },
      {
        title: "Minimalist Future",
        products: [
          {
            id: 1,
            name: "Minimal Shirt",
            description: "Clean-cut shirt in neutral tones",
            price: "₦74,985",
            image: "https://via.placeholder.com/300x200?text=Minimal+Shirt",
            rating: 4.4,
          },
          {
            id: 2,
            name: "Sleek Jacket",
            description: "Futuristic jacket with clean lines",
            price: "₦134,985",
            image: "https://via.placeholder.com/300x200?text=Sleek+Jacket",
            rating: 4.6,
          },
          {
            id: 3,
            name: "Tapered Trousers",
            description: "Slim-fit trousers with modern design",
            price: "₦89,985",
            image: "https://via.placeholder.com/300x200?text=Tapered+Trousers",
            rating: 4.3,
          },
          {
            id: 4,
            name: "Monochrome Tee",
            description: "Simple tee for minimalist style",
            price: "₦49,985",
            image: "https://via.placeholder.com/300x200?text=Monochrome+Tee",
            rating: 4.1,
          },
          {
            id: 5,
            name: "Structured Blazer",
            description: "Sharp blazer with sleek silhouette",
            price: "₦149,985",
            image: "https://via.placeholder.com/300x200?text=Structured+Blazer",
            rating: 4.7,
          },
          {
            id: 6,
            name: "Knit Polo",
            description: "Breathable polo with subtle texture",
            price: "₦69,985",
            image: "https://via.placeholder.com/300x200?text=Knit+Polo",
            rating: 4.2,
          },
          {
            id: 7,
            name: "Minimal Sneakers",
            description: "White sneakers with clean design",
            price: "₦119,985",
            image: "https://via.placeholder.com/300x200?text=Minimal+Sneakers",
            rating: 4.5,
          },
          {
            id: 8,
            name: "Tailored Shorts",
            description: "Chic shorts for modern look",
            price: "₦64,985",
            image: "https://via.placeholder.com/300x200?text=Tailored+Shorts",
            rating: 4.0,
          },
          {
            id: 9,
            name: "Oversized Coat",
            description: "Sleek coat with minimalist aesthetic",
            price: "₦179,985",
            image: "https://via.placeholder.com/300x200?text=Oversized+Coat",
            rating: 4.8,
          },
          {
            id: 10,
            name: "Cotton Sweater",
            description: "Soft sweater with clean lines",
            price: "₦94,985",
            image: "https://via.placeholder.com/300x200?text=Cotton+Sweater",
            rating: 4.3,
          },
          {
            id: 11,
            name: "Leather Loafers",
            description: "Polished loafers for refined style",
            price: "₦104,985",
            image: "https://via.placeholder.com/300x200?text=Leather+Loafers",
            rating: 4.4,
          },
          {
            id: 12,
            name: "Linen Shirt",
            description: "Lightweight shirt for breathability",
            price: "₦79,985",
            image: "https://via.placeholder.com/300x200?text=Linen+Shirt",
            rating: 4.2,
          },
          {
            id: 13,
            name: "Minimal Backpack",
            description: "Sleek bag for daily essentials",
            price: "₦84,985",
            image: "https://via.placeholder.com/300x200?text=Minimal+Backpack",
            rating: 4.3,
          },
          {
            id: 14,
            name: "Crewneck Top",
            description: "Versatile top with modern fit",
            price: "₦59,985",
            image: "https://via.placeholder.com/300x200?text=Crewneck+Top",
            rating: 4.1,
          },
          {
            id: 15,
            name: "Structured Skirt",
            description: "Clean-lined skirt for chic look",
            price: "₦99,985",
            image: "https://via.placeholder.com/300x200?text=Structured+Skirt",
            rating: 4.5,
          },
        ],
      },
      {
        title: "Bridal Couture",
        products: [
          {
            id: 1,
            name: "Wedding Gown",
            description: "Elegant gown with lace details",
            price: "₦449,985",
            image: "https://via.placeholder.com/300x200?text=Wedding+Gown",
            rating: 4.9,
          },
          {
            id: 2,
            name: "Bridal Veil",
            description: "Delicate veil with pearl accents",
            price: "₦224,985",
            image: "https://via.placeholder.com/300x200?text=Bridal+Veil",
            rating: 4.7,
          },
          {
            id: 3,
            name: "Satin Dress",
            description: "Flowing dress with soft sheen",
            price: "₦374,985",
            image: "https://via.placeholder.com/300x200?text=Satin+Dress",
            rating: 4.8,
          },
          {
            id: 4,
            name: "Tulle Skirt",
            description: "Voluminous skirt for bridal elegance",
            price: "₦194,985",
            image: "https://via.placeholder.com/300x200?text=Tulle+Skirt",
            rating: 4.6,
          },
          {
            id: 5,
            name: "Lace Bodice",
            description: "Intricate bodice for bridal wear",
            price: "₦149,985",
            image: "https://via.placeholder.com/300x200?text=Lace+Bodice",
            rating: 4.5,
          },
          {
            id: 6,
            name: "Silk Train",
            description: "Luxurious train for dramatic effect",
            price: "₦299,985",
            image: "https://via.placeholder.com/300x200?text=Silk+Train",
            rating: 4.9,
          },
          {
            id: 7,
            name: "Embroidered Top",
            description: "Hand-embroidered bridal top",
            price: "₦179,985",
            image: "https://via.placeholder.com/300x200?text=Embroidered+Top",
            rating: 4.7,
          },
          {
            id: 8,
            name: "Chiffon Gown",
            description: "Lightweight gown with soft draping",
            price: "₦404,985",
            image: "https://via.placeholder.com/300x200?text=Chiffon+Gown",
            rating: 4.8,
          },
          {
            id: 9,
            name: "Pearl Tiara",
            description: "Elegant tiara for bridal look",
            price: "₦89,985",
            image: "https://via.placeholder.com/300x200?text=Pearl+Tiara",
            rating: 4.4,
          },
          {
            id: 10,
            name: "Satin Gloves",
            description: "Long gloves for classic bridal style",
            price: "₦74,985",
            image: "https://via.placeholder.com/300x200?text=Satin+Gloves",
            rating: 4.3,
          },
          {
            id: 11,
            name: "Mermaid Dress",
            description: "Fitted dress with flared hem",
            price: "₦419,985",
            image: "https://via.placeholder.com/300x200?text=Mermaid+Dress",
            rating: 4.9,
          },
          {
            id: 12,
            name: "Bridal Cape",
            description: "Sheer cape with delicate embroidery",
            price: "₦134,985",
            image: "https://via.placeholder.com/300x200?text=Bridal+Cape",
            rating: 4.6,
          },
          {
            id: 13,
            name: "A-Line Gown",
            description: "Classic gown with timeless silhouette",
            price: "₦389,985",
            image: "https://via.placeholder.com/300x200?text=A-Line+Gown",
            rating: 4.8,
          },
          {
            id: 14,
            name: "Beaded Clutch",
            description: "Elegant clutch for bridal essentials",
            price: "₦104,985",
            image: "https://via.placeholder.com/300x200?text=Beaded+Clutch",
            rating: 4.5,
          },
          {
            id: 15,
            name: "Lace Shawl",
            description: "Delicate shawl for bridal elegance",
            price: "₦119,985",
            image: "https://via.placeholder.com/300x200?text=Lace+Shawl",
            rating: 4.7,
          },
        ],
      },
      {
        title: "African Heritage",
        products: [
          {
            id: 1,
            name: "Ankara Shirt",
            description: "Vibrant Ankara print shirt",
            price: "₦104,985",
            image: "https://via.placeholder.com/300x200?text=Ankara+Shirt",
            rating: 4.5,
          },
          {
            id: 2,
            name: "Tribal Jacket",
            description: "Bold jacket with cultural patterns",
            price: "₦149,985",
            image: "https://via.placeholder.com/300x200?text=Tribal+Jacket",
            rating: 4.6,
          },
          {
            id: 3,
            name: "Kente Dress",
            description: "Traditional Kente fabric dress",
            price: "₦179,985",
            image: "https://via.placeholder.com/300x200?text=Kente+Dress",
            rating: 4.8,
          },
          {
            id: 4,
            name: "Dashiki Top",
            description: "Colorful top with African motifs",
            price: "₦89,985",
            image: "https://via.placeholder.com/300x200?text=Dashiki+Top",
            rating: 4.4,
          },
          {
            id: 5,
            name: "Aso Oke Skirt",
            description: "Handwoven skirt with rich texture",
            price: "₦119,985",
            image: "https://via.placeholder.com/300x200?text=Aso+Oke+Skirt",
            rating: 4.7,
          },
          {
            id: 6,
            name: "Beaded Necklace",
            description: "Handcrafted necklace with vibrant beads",
            price: "₦59,985",
            image: "https://via.placeholder.com/300x200?text=Beaded+Necklace",
            rating: 4.3,
          },
          {
            id: 7,
            name: "Agbada Set",
            description: "Traditional embroidered set",
            price: "₦199,985",
            image: "https://via.placeholder.com/300x200?text=Agbada+Set",
            rating: 4.9,
          },
          {
            id: 8,
            name: "Ankara Trousers",
            description: "Bold print trousers for statement look",
            price: "₦94,985",
            image: "https://via.placeholder.com/300x200?text=Ankara+Trousers",
            rating: 4.5,
          },
          {
            id: 9,
            name: "Kaftan Dress",
            description: "Flowing dress with cultural embroidery",
            price: "₦164,985",
            image: "https://via.placeholder.com/300x200?text=Kaftan+Dress",
            rating: 4.7,
          },
          {
            id: 10,
            name: "Headwrap",
            description: "Vibrant headwrap with African prints",
            price: "₦44,985",
            image: "https://via.placeholder.com/300x200?text=Headwrap",
            rating: 4.2,
          },
          {
            id: 11,
            name: "Senegalese Robe",
            description: "Elegant robe with bold patterns",
            price: "₦184,985",
            image: "https://via.placeholder.com/300x200?text=Senegalese+Robe",
            rating: 4.8,
          },
          {
            id: 12,
            name: "Beaded Sandals",
            description: "Handcrafted sandals with tribal beads",
            price: "₦74,985",
            image: "https://via.placeholder.com/300x200?text=Beaded+Sandals",
            rating: 4.4,
          },
          {
            id: 13,
            name: "Adire Shirt",
            description: "Tie-dye shirt with traditional design",
            price: "₦99,985",
            image: "https://via.placeholder.com/300x200?text=Adire+Shirt",
            rating: 4.6,
          },
          {
            id: 14,
            name: "Ankara Blazer",
            description: "Modern blazer with African flair",
            price: "₦134,985",
            image: "https://via.placeholder.com/300x200?text=Ankara+Blazer",
            rating: 4.7,
          },
          {
            id: 15,
            name: "Kente Scarf",
            description: "Vibrant scarf with cultural patterns",
            price: "₦64,985",
            image: "https://via.placeholder.com/300x200?text=Kente+Scarf",
            rating: 4.5,
          },
        ],
      },
      {
        title: "Sustainable Future",
        products: [
          {
            id: 1,
            name: "Eco Tee",
            description: "Organic cotton t-shirt",
            price: "₦67,485",
            image: "https://via.placeholder.com/300x200?text=Eco+Tee",
            rating: 4.3,
          },
          {
            id: 2,
            name: "Organic Pants",
            description: "Sustainable linen blend pants",
            price: "₦97,485",
            image: "https://via.placeholder.com/300x200?text=Organic+Pants",
            rating: 4.4,
          },
          {
            id: 3,
            name: "Recycled Jacket",
            description: "Jacket made from recycled materials",
            price: "₦149,985",
            image: "https://via.placeholder.com/300x200?text=Recycled+Jacket",
            rating: 4.6,
          },
          {
            id: 4,
            name: "Bamboo Socks",
            description: "Soft socks from sustainable bamboo",
            price: "₦29,985",
            image: "https://via.placeholder.com/300x200?text=Bamboo+Socks",
            rating: 4.1,
          },
          {
            id: 5,
            name: "Hemp Shirt",
            description: "Eco-friendly hemp shirt",
            price: "₦79,985",
            image: "https://via.placeholder.com/300x200?text=Hemp+Shirt",
            rating: 4.3,
          },
          {
            id: 6,
            name: "Recycled Denim",
            description: "Jeans made from recycled denim",
            price: "₦104,985",
            image: "https://via.placeholder.com/300x200?text=Recycled+Denim",
            rating: 4.5,
          },
          {
            id: 7,
            name: "Organic Hoodie",
            description: "Cozy hoodie from organic cotton",
            price: "₦119,985",
            image: "https://via.placeholder.com/300x200?text=Organic+Hoodie",
            rating: 4.4,
          },
          {
            id: 8,
            name: "Eco Sneakers",
            description: "Sustainable sneakers with recycled soles",
            price: "₦134,985",
            image: "https://via.placeholder.com/300x200?text=Eco+Sneakers",
            rating: 4.7,
          },
          {
            id: 9,
            name: "Linen Dress",
            description: "Breathable dress from sustainable linen",
            price: "₦124,985",
            image: "https://via.placeholder.com/300x200?text=Linen+Dress",
            rating: 4.6,
          },
          {
            id: 10,
            name: "Recycled Bag",
            description: "Tote bag from recycled materials",
            price: "₦59,985",
            image: "https://via.placeholder.com/300x200?text=Recycled+Bag",
            rating: 4.2,
          },
          {
            id: 11,
            name: "Organic Scarf",
            description: "Soft scarf from organic cotton",
            price: "₦44,985",
            image: "https://via.placeholder.com/300x200?text=Organic+Scarf",
            rating: 4.1,
          },
          {
            id: 12,
            name: "Hemp Jacket",
            description: "Lightweight jacket from hemp",
            price: "₦139,985",
            image: "https://via.placeholder.com/300x200?text=Hemp+Jacket",
            rating: 4.5,
          },
          {
            id: 13,
            name: "Eco Shorts",
            description: "Sustainable shorts for casual wear",
            price: "₦69,985",
            image: "https://via.placeholder.com/300x200?text=Eco+Shorts",
            rating: 4.3,
          },
          {
            id: 14,
            name: "Recycled Cap",
            description: "Cap made from recycled fibers",
            price: "₦39,985",
            image: "https://via.placeholder.com/300x200?text=Recycled+Cap",
            rating: 4.0,
          },
          {
            id: 15,
            name: "Organic Skirt",
            description: "Eco-friendly skirt with modern fit",
            price: "₦89,985",
            image: "https://via.placeholder.com/300x200?text=Organic+Skirt",
            rating: 4.4,
          },
        ],
      },
      // Add more collections...
    ];
  }

  // Open modal with collection data
  function openCollectionModal(index) {
    currentCollectionIndex = index;
    const collection = collectionsData[index];

    modalTitle.textContent = collection.title;
    updateCounter();
    renderProducts(collection.products);

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Render product cards
  function renderProducts(products) {
    modalProducts.innerHTML = "";

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-actions">
              <button class="wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
              <button class="add-to-cart btn">Add to Cart</button>
            </div>
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-rating">
              <div class="star-rating">${"★".repeat(
                Math.floor(product.rating)
              )}${"☆".repeat(5 - Math.floor(product.rating))}</div>
              <span class="rating-count">(${product.rating})</span>
            </div>
          </div>
        `;
      modalProducts.appendChild(productCard);
    });

    // Rebind event listeners
    bindCartAndWishlistEvents();
  }

  // Update counter display
  function updateCounter() {
    modalCounter.textContent = `${currentCollectionIndex + 1}/${
      collectionsData.length
    }`;
  }

  // Navigation handlers
  modalPrev.addEventListener("click", () => {
    currentCollectionIndex =
      (currentCollectionIndex - 1 + collectionsData.length) %
      collectionsData.length;
    openCollectionModal(currentCollectionIndex);
  });

  modalNext.addEventListener("click", () => {
    currentCollectionIndex =
      (currentCollectionIndex + 1) % collectionsData.length;
    openCollectionModal(currentCollectionIndex);
  });

  // Close modal
  modalClose.addEventListener("click", closeModal);
  modal
    .querySelector(".collection-modal-overlay")
    .addEventListener("click", closeModal);

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowLeft") {
        modalPrev.click();
      } else if (e.key === "ArrowRight") {
        modalNext.click();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  });

  // Initialize collections and bind open triggers
  initializeCollections();

  // Bind to collection blocks
  document.querySelectorAll(".view-btn").forEach((block, index) => {
    block.addEventListener("click", () => {
      openCollectionModal(index);
    });
  });

  // Your existing cart and wishlist logic
  function bindCartAndWishlistEvents() {
    let cartCount = 0;
    const cartCountElement = document.querySelector(".cart-count");

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

    let wishlistCount = 0;
    const wishlistCountElements = document.querySelectorAll(".wishlist-count");

    document.querySelectorAll(".wishlist-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const isActive = this.classList.contains("active");
        if (!isActive) {
          wishlistCount++;
          this.classList.add("active");
          const countElement = this.querySelector(".wishlist-count");
          if (countElement) {
            countElement.textContent = wishlistCount;
            countElement.classList.add("pulse");
            setTimeout(() => {
              countElement.classList.remove("pulse");
            }, 300);
          }
        }
      });
    });
  }

  // Initial binding
  bindCartAndWishlistEvents();
});
