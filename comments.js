let hasLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openCommentsBtn");
  const closeBtn = document.getElementById("closeCommentsBtn");
  const commentsSlide = document.getElementById("comments");
  const allOtherSlides = document.querySelectorAll(".slide:not(#comments)");
  const loginOverlay = document.getElementById("loginOverlay");
  const commentsContainer = document.getElementById("commentsContainer");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // Hide all other slides
      allOtherSlides.forEach(slide => {
        slide.style.display = "none";
      });

      // Show the comments slide
      commentsSlide.style.display = "flex";
      window.scrollTo(0, 0);

      // Handle login state
      if (!hasLoggedIn) {
        loginOverlay.style.display = "flex";
        commentsContainer.classList.add("blurred");
      } else {
        loginOverlay.style.display = "none";
        commentsContainer.classList.remove("blurred");
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      // Hide the comments slide
      commentsSlide.style.display = "none";

      // Show all other slides (assuming they are usually flex or block, but reset to empty clears inline styles)
      allOtherSlides.forEach(slide => {
        slide.style.display = "";
      });

      // Scroll smoothly back to the About section
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Function called by the login buttons inline onclick="dismissLogin()"
function dismissLogin() {
  hasLoggedIn = true;
  const loginOverlay = document.getElementById("loginOverlay");
  const commentsContainer = document.getElementById("commentsContainer");
  
  if (loginOverlay) loginOverlay.style.display = "none";
  if (commentsContainer) commentsContainer.classList.remove("blurred");
}
