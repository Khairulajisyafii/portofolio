let left = document.getElementById("left");
let right = document.getElementById("right");
let book = document.querySelector(".parent-book");
let cover = document.querySelector(".cover-top");
let sheet1 = document.querySelector(".sheet1");

function bookLogic(index) {
  switch (index) {
    case 1:
      book.style.transform = "translateX(0px)";
      setTimeout(() => {
        cover.style.transform = "rotateY(0deg)translateX(0px)";
      }, 350);
      sheet1.style.zIndex = -1;
      break;
    case 2:
      book.style.transform = "translateX(150px)";
      setTimeout(() => {
        cover.style.transform = "translateX(-8px)rotateY(-180deg)";

        sheet1.style.transform = "translateX(0px)rotateY(0deg)";
      }, 350);

      break;
    case 3:
      sheet1.style.transform = "translateX(-17px)rotateY(180deg)";
      sheet1.style.zIndex = 10;

      break;
    default:
      break;
  }
}

let index = 1;
left.addEventListener("click", () => {
  if (index > 1) {
    index--;
    bookLogic(index);
  }
});
right.addEventListener("click", () => {
  if (index < 3) {
    index++;
    bookLogic(index);
  }
});
