// ScrollReveal animation
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__img, .home__text, .home__para`, {
    origin: 'top',
    interval: 200,
});