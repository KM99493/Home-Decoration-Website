const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
})

//Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        cursor: true,
    },
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

//Scroll reveal animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});

//Hero
sr.reveal('.hero__text', {origin: 'top'});

//Steps
sr.reveal('.steps__step', {distance: '100px', interval: 100});

//About
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay: 800});

//Testimonial
sr.reveal('.testimonial__bg', {delay: 800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay: 1000});

//Brands
sr.reveal('.brands__img', {delay: 600, distance: '100px', interval: 100});

//Work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 800});
sr.reveal('.work__grid', {delay: 1000});

//Status
sr.reveal('.status');
sr.reveal('.status__item', {distance: '100px', interval: 100})

//News
sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay :800});
sr.reveal('.news__item', {distance: '100px', interval: 100, delay: 1000});

//Contact
sr.reveal('.contact__container');
sr.reveal('.contact__text', {delay: 800});

//Footer
sr.reveal('.footer__item', {distance: '100px', interval: 100})
sr.reveal('.footer__copyright');