window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#header").style.backgroundColor = "#e2ff00";
    document.querySelector("#header").style.color = "#000";
    document.querySelector("#header").style.transition = "all 0.2s ease";

  } else {
    document.querySelector("#header").style.backgroundColor = "";
    document.querySelector("#header").style.color = "#000";
  }
}
