// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        const headings = document.querySelectorAll('h2, h3, h4');
        const paragraphs = document.querySelectorAll('p');
        const animatedElements = [...sections, ...headings, ...paragraphs];

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Run on load
    animateOnScroll();

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
