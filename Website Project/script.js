let big = document.querySelector(".bigImages");
let rightButton = document.querySelector(".right");
let leftButton = document.querySelector(".left");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let openCloseButton = document.querySelector(".headerGrid");
let ocButton = document.querySelector(".bt");
let flag = 1;

ocButton.addEventListener("click", () => {
  openCloseButton.classList.toggle("hidden");
});

function changeDot(flag) {
  if (flag === 1) {
    a.style.backgroundColor = "#1c7ed6";
    changeDotWhite(2);
    changeDotWhite(3);
  } else if (flag === 2) {
    b.style.backgroundColor = "#1c7ed6";
    changeDotWhite(1);
    changeDotWhite(3);
  } else {
    c.style.backgroundColor = "#1c7ed6";
    changeDotWhite(1);
    changeDotWhite(2);
  }
}
function changeDotWhite(ab) {
  if (ab === 1) {
    a.style.backgroundColor = "white";
  } else if (ab === 2) {
    b.style.backgroundColor = "white";
  } else c.style.backgroundColor = "white";
}
setInterval(() => {
  if (flag === 3) {
    flag = 1;
  } else {
    flag++;
  }
  big.style.backgroundImage = `url(images/f${flag}.png)`;
  changeDot(flag);
}, 4000);

leftButton.addEventListener("click", () => {});
rightButton.addEventListener("click", () => {
  if (flag === 3) {
    flag = 1;
  } else {
    flag++;
  }
  setTimeout(() => {
    big.style.backgroundImage = `url(images/f${flag}.png)`;
    changeDot(flag);
  }, 150);
});

leftButton.addEventListener("click", () => {
  if (flag === 1) {
    flag = 3;
  } else {
    flag--;
  }

  setTimeout(() => {
    big.style.backgroundImage = `url(images/f${flag}.png)`;
    changeDot(flag);
  }, 150);
});

// Academics section
let cd = document.querySelectorAll(".card");
let btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", () => {
    cd[i].classList.toggle("hide");
  });
