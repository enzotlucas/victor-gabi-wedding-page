
(function () {
    const overlay = document.getElementById('invite-overlay');
    if (!overlay) return;

    document.body.style.overflow = 'hidden';

    let opened = false;

    function openInvite() {
        if (opened) return;
        opened = true;

        overlay.classList.add('opening');

        scrollIntoHeroSection();

        setOverlayFadeOut();

        enableScroll();
    }

    function scrollIntoHeroSection() {
        const hero = document.querySelector('.hero');

        if (hero) {
            hero.scrollIntoView({ behavior: 'instant' });
        }
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

