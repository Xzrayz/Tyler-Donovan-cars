// Scroll to the About Section on button click
document.querySelector('.scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth'
    });
});
