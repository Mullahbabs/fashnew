// Video Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(".video-card");
  const videoModal = document.querySelector(".video-modal");
  const closeModal = document.querySelector(".close-modal");
  const youtubeIframe = document.getElementById("youtube-iframe");

  // Open modal when video card is clicked
  videoCards.forEach((card) => {
    const playButton = card.querySelector(".play-button");

    const openModal = () => {
      const videoId = card.getAttribute("data-video-id");
      youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    card.addEventListener("click", openModal);
    playButton.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal();
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    youtubeIframe.src = "";
    videoModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Close when clicking outside modal
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      youtubeIframe.src = "";
      videoModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
