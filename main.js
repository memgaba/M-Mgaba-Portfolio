let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = setInterval.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href"=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    display: 200,
});

ScrollRevael().reveal('.home-content, heading', { origin: 'top'});
ScrollRevael().reveal('.home-img, services-container, .portfolio-box, contact form', {origin: 'button'});
ScrollRevael().reveal('.home-contact p, .about-content', {origin: 'left'});
ScrollRevael().reveal('.home-contact p, .about-content', {origin: 'right'});