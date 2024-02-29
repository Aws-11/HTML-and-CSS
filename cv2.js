// Dynamic Background
const backgrounds = ['dynamic-background1.jpg', 'dynamic-background2.jpg', 'dynamic-background3.jpg'];
let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  document.querySelector('header').style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds
