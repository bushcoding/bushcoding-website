function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}
document.addEventListener('DOMContentLoaded', fadeInElements);
window.addEventListener('scroll', fadeInElements);

