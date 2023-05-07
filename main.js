let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};
window.addEventListener("online", function () {
  online();
});
window.addEventListener("offline", function () {
  offline();
});

reload.onclick = function () {
  window.Location.reload();
};

function online() {
  title.innerHTML = "Online Now";
  title.style.color = "#5800ff";
  ul.classList.add("hide");
  reload.classList.add("hide");
}
function offline() {
  title.innerHTML = "Offline Now";
  title.style.color = "#666";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}
