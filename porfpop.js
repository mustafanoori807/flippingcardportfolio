const overlay = document.getElementsByClassName('overlay')[0];
const window = document.getElementsByClassName('window')[0];


let openWindow = document.getElementsByClassName("open-window");
openWindow[0].addEventListener('click', () => {
  setPopup();
})

let closeWindow = document.getElementsByClassName("close-window");
closeWindow[0].addEventListener('click', () => {
  closePopup();
})

function closePopup(){
  window.classList.remove("active");
  overlay.classList.remove("active");
}

function setPopup(){
  window.classList.add("active");
  overlay.classList.add("active");
}
