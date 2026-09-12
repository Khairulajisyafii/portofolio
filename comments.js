let hasLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openCommentsBtn");
  const closeBtn = document.getElementById("closeCommentsBtn");
  const commentsSlide = document.getElementById("comments");
  const allOtherSlides = document.querySelectorAll(".slide:not(#comments)");
  const loginOverlay = document.getElementById("loginOverlay");
  const commentsContainer = document.getElementById("commentsContainer");
  const neoNav = document.querySelector(".neo-nav");
  const neoHamburgerBtn = document.querySelector(".neo-hamburger-btn");
  const hamburgerWrapper = document.querySelector(".neo-hamburger-wrapper");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // Hide all other slides
      allOtherSlides.forEach(slide => {
        slide.style.display = "none";
      });
      if (neoNav) neoNav.style.display = "none";
      if (neoHamburgerBtn) neoHamburgerBtn.style.display = "none";
      if (hamburgerWrapper) hamburgerWrapper.style.display = "none";

      // Show the comments slide
      commentsSlide.style.display = "flex";
      window.scrollTo(0, 0);

      // Handle login state
      if (!hasLoggedIn && loginOverlay) {
        loginOverlay.style.display = "flex";
        if (commentsContainer) commentsContainer.classList.add("blurred");
      } else if (loginOverlay) {
        loginOverlay.style.display = "none";
        if (commentsContainer) commentsContainer.classList.remove("blurred");
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
      if (neoNav) neoNav.style.display = "";
      if (neoHamburgerBtn) neoHamburgerBtn.style.display = "";
      if (hamburgerWrapper) hamburgerWrapper.style.display = "";

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
