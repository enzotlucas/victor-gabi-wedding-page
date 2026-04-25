
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.carousel-container');

let currentIndex = 0;
let autoPlayInterval;

let startX = 0;
let endX = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function restartAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

container.addEventListener('mouseenter', stopAutoPlay);
container.addEventListener('mouseleave', restartAutoPlay);