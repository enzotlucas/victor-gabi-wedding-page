document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Select all elements to be animated
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for internal links if added
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let sliderIndex = 0;

function updateSlider() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${sliderIndex * 220}px)`;
}

function next() {
  const max = document.querySelectorAll("#slider img").length - 1;
  if (sliderIndex < max) {
    sliderIndex++;
    updateSlider();
  }
}

function prev() {
  if (sliderIndex > 0) {
    sliderIndex--;
    updateSlider();
  }
}