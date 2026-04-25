const hero = document.querySelector('.hero');
const navbar = document.getElementById('floatingNavbar');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navbar.classList.remove('show');
        }else{
            navbar.classList.add('show');
        }
    });
},{
    threshold:0
});

observer.observe(hero);


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


/* fecha ao clicar em item */
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click', ()=>{
        navLinks.classList.remove('open');
    });
});