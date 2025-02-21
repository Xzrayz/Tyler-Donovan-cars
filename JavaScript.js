// Smooth scroll on navigation clicks
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
        });
    });
});
