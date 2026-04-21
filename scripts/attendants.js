
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

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
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

nextBtn.addEventListener('click', () => {
  nextSlide();
  restartAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  restartAutoPlay();
});

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  restartAutoPlay();
});

container.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
  restartAutoPlay();
});

function handleSwipe() {
  const distance = startX - endX;

  if (distance > 50) {
    nextSlide();
  } else if (distance < -50) {
    prevSlide();
  }
}

container.addEventListener('mouseenter', stopAutoPlay);
container.addEventListener('mouseleave', restartAutoPlay);