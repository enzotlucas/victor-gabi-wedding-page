const hero = document.querySelector('.hero');
const navbar = document.getElementById('floatingNavbar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('show');
            if (navLinks.classList.contains('open'))
                navLinks.classList.remove('open');
        } else {
            navbar.classList.add('show');
        }
    });
}, {
    threshold: 0
});

observer.observe(hero);


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});