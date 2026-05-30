(function () {
    const overlay = document.getElementById('invite-overlay');
    if (!overlay) return;

    document.body.style.overflow = 'hidden';

    let opened = false;

    let clickedAt = null;

    const MIN_WAIT_BEFORE_OPEN = 0;

    let imagesReady = false;
    let imagesReadyAt = null;

    (function waitForImages() {
        const imgs = Array.from(document.querySelectorAll('img'));
        const relevant = imgs.filter(img => img.src && !img.src.endsWith('/'));

        if (relevant.length === 0) { markReady(); return; }

        let loaded = 0;
        function onEach() {
            if (++loaded >= relevant.length) markReady();
        }

        relevant.forEach(img => {
            if (img.complete && img.naturalWidth > 0) {
                onEach();
            } else {
                img.addEventListener('load',  onEach, { once: true });
                img.addEventListener('error', onEach, { once: true });
            }
        });
    })();

    function markReady() {
        imagesReady = true;
        imagesReadyAt = Date.now();

        if (clickedAt !== null) processOpen();
    }
    

    function openInvite() {
        if (opened) return;
        if (clickedAt !== null) return; 

        clickedAt = Date.now();

        if (imagesReady) {
            processOpen();
        }
    }

    function processOpen() {
        if (opened) return;
        opened = true;

        overlay.classList.add('opening');

        scrollIntoHeroSection();
        setOverlayFadeOut();
        enableScroll();
    }

    function scrollIntoHeroSection() {
        const hero = document.querySelector('.hero');
        if (hero) hero.scrollIntoView({ behavior: 'instant' });
    }

    function setOverlayFadeOut() {
        setTimeout(() => {
            overlay.classList.add('fade-out');
        }, 1600);
    }

    function enableScroll() {
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 2500);
    }

    overlay.addEventListener('click', openInvite);
    overlay.addEventListener('touchend', function (e) {
        e.preventDefault();
        openInvite();
    }, { passive: false });
})();