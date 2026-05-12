
const FOOTER_SLIDE_DURATION = 2000;
const FOOTER_TRANSITION_SPEED = 2000;

(function () {
    const track = document.querySelector('.footer-carousel-track');

    if (!track) return;

    const slides = Array.from(track.children);

    if (slides.length === 0) return;

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    const totalSlides = slides.length;
    let currentIndex = 0;
    let isTransitioning = false;

    function getSlideWidth() {
        const slide = track.querySelector('.footer-slide');
        const style = window.getComputedStyle(slide);
        return slide.offsetWidth + parseFloat(style.marginRight || 0);
    }

    function advance() {
        if (isTransitioning) return;

        isTransitioning = true;
        currentIndex++;

        track.style.transition = `transform ${FOOTER_TRANSITION_SPEED}ms ease`;
        track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;

        setTimeout(() => {
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
            }

            isTransitioning = false;
        }, FOOTER_TRANSITION_SPEED);
    }
    setInterval(advance, FOOTER_SLIDE_DURATION);
})();