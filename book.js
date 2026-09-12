let left = document.getElementById("left");
let right = document.getElementById("right");
let book = document.querySelector(".parent-book");
let cover = document.querySelector(".cover-top");
let sheet1 = document.querySelector(".sheet1");

let isAnimating = false;
const BOOK_DURATION = 500;
const BTN_DURATION = 500;

function bookLogic(index, prevIndex) {
  if (isAnimating) return false;
  isAnimating = true;

  switch (index) {
    case 1:
      book.style.transform = "translateX(0px)";
      setTimeout(() => {
        cover.style.transform = "rotateY(0deg) translateX(0px)";
      }, 350);
      sheet1.style.zIndex = -1;

      setTimeout(() => {
        left.style.transform = "translateX(0px)";
        right.style.transform = "translateX(0px)";
        setTimeout(() => {
          isAnimating = false;
        }, BTN_DURATION);
      }, BOOK_DURATION);
      break;

    case 2:
      if (prevIndex === 1) {
        left.style.transform = "translateX(-220px)";
        right.style.transform = "translateX(120px)";

        setTimeout(() => {
          book.style.transform = "translateX(120px)";
          setTimeout(() => {
            cover.style.transform = "translateX(0px) rotateY(-180deg)";
            sheet1.style.transform = "translateX(0px) rotateY(0deg)";
          }, 350);
          setTimeout(() => {
            isAnimating = false;
          }, BOOK_DURATION);
        }, BTN_DURATION);
      } else {
        sheet1.style.transform = "translateX(0px) rotateY(0deg)";
        setTimeout(() => {
          sheet1.style.zIndex = -1;
        }, 350);
        setTimeout(() => {
          isAnimating = false;
        }, BOOK_DURATION);
      }
      break;

    case 3:
      sheet1.style.transform = "translateX(0px) rotateY(180deg)";
      sheet1.style.zIndex = 10;
      setTimeout(() => {
        isAnimating = false;
      }, BOOK_DURATION);
      break;

    default:
      isAnimating = false;
      break;
  }
}

let index = 1;
left.addEventListener("click", () => {
  if (index > 1 && !isAnimating) {
    let prevIndex = index;
    index--;
    bookLogic(index, prevIndex);
  }
});
right.addEventListener("click", () => {
  if (index < 3 && !isAnimating) {
    let prevIndex = index;
    index++;
    bookLogic(index, prevIndex);
  }
});

// Swipe support for mobile
let touchstartX = 0;
let touchendX = 0;

document.querySelector('.slide-skills').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

document.querySelector('.slide-skills').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  if (touchendX < touchstartX - 50) {
    // swipe left -> next page
    if (index < 3 && !isAnimating) {
      let prevIndex = index;
      index++;
      bookLogic(index, prevIndex);
    }
  }
  if (touchendX > touchstartX + 50) {
    // swipe right -> prev page
    if (index > 1 && !isAnimating) {
      let prevIndex = index;
      index--;
      bookLogic(index, prevIndex);
    }
  }
});
