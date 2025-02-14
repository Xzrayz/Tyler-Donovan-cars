// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
    // Select all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');

    // Function to check visibility of each element
    const checkFadeIn = () => {
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;  // Trigger when the element is 1/3 from the top

            if (elementPosition < screenPosition) {
                element.classList.add('visible'); // Add visible class when element is in view
            }
        });
    };

    // Run the function on scroll
    window.addEventListener('scroll', checkFadeIn);

    // Initial check in case content is already in view when the page loads
    checkFadeIn();
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

// Show the scroll-to-top button when the user scrolls down
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll back to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
