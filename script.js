document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const reveals = document.querySelectorAll('.reveal');
    const weightSection = document.getElementById('weight');
    
    // Check if the device has a mouse/fine pointer
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            let dx = mouseX - cursorX;
            let dy = mouseY - cursorY;
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Cursor Hover Effects
        const hoverElements = document.querySelectorAll('button, input, .texture-item, .video-circle');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1, // Trigger earlier on mobile
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.id === 'weight') {
                    document.body.style.backgroundColor = 'var(--dusk)';
                }
            } else {
                // If scrolling back up, reset background
                if (entry.target.id === 'weight' && entry.boundingClientRect.top > 0) {
                    document.body.style.backgroundColor = 'var(--paper)';
                }
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
    observer.observe(weightSection);
});