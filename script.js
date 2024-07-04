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
  big.style.backgroundImage = `url(images/bigImg/f${flag}.png)`;
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
    big.style.backgroundImage = `url(images/bigImg/f${flag}.png)`;
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
    big.style.backgroundImage = `url(images/bigImg/f${flag}.png)`;
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

//sticking the navigation after 1vh used method : window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.innerHeight - 200 < window.scrollY) {
    openCloseButton.classList.add("stickyNav");
  } else openCloseButton.classList.remove("stickyNav");
});

document.querySelector(".nav--container").addEventListener("click", () => {
  openCloseButton.classList.toggle("hidden");
});

//eca grid section

let g = document.querySelectorAll(".eca-img");
let mainG = document.querySelector(".eca");
let im = document.querySelector(".enlarge");

im.addEventListener("click", () => {
  mainG.classList.toggle("hideEca");
});

if (mainG.classList.contains("hideEca")) {
  mainG.addEventListener("click", () => {
    mainG.classList.toggle("hideEca");
  });
}

for (let i = 0; i < g.length; i++) {
  g[i].style.backgroundImage = `url(images/eca/e${i + 1}.png)`;
  g[i].addEventListener("click", () => {
    mainG.classList.toggle("hideEca");

    im.style.backgroundImage = `url(images/eca/e${i + 1}.png)`;
  });
}

//contacts section
let contact = document.querySelector(".contacts");
let phone = document.querySelector(".phone");
let cancel = document.querySelector(".cancelPn");
phone.addEventListener("click", () => {
  contact.classList.toggle("numberShow");
});

cancel.addEventListener("click", () => {
  contact.classList.toggle("numberShow");
});

// contact.addEventListener("click", () => {
//   contact.classList.remove("numberShow");
// });
