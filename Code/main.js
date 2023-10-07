let img = document.querySelector(`.image-pic`);
let container = document.querySelector(`.container`);

function phones(phone) {
  img.src = phone;
}
function colors(color) {
  container.style.background = `linear-gradient(45deg, black 0 10%, ${color} 50% 100%)`;
}
