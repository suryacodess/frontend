const btn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#header").style.backgroundColor = "#000";
    document.querySelector("#header").style.color = "#fff";
    document.querySelector("#header").style.transition = "all 0.2s ease";
  } else {
    document.querySelector("#header").style.backgroundColor = "";
    document.querySelector("#header").style.color = "#fff";
  }
};
