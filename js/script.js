// Agrega evento de scroll al documento
document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll(".content > div");
    var navbarLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(function (section, index) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navbarLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            navbarLinks[index].classList.add("active");
        }
    });
});

// Agrega evento de click a cada enlace del navbar
document.querySelectorAll("nav ul li a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var sectionId = link.getAttribute("href");
        var section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
        link.classList.add("active");
        document.querySelectorAll("nav ul li a").forEach(function (otherLink) {
            if (otherLink !== link) {
                otherLink.classList.remove("active");
            }
        });
    });
});

document.getElementById('copy-button').addEventListener('click', () => {
    const email = document.getElementById('email').textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('Correo copiado al portapapeles!');
    }, (err) => {
        console.error('Error al copiar el correo: ', err);
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const recaptcha = document.querySelector('[data-netlify-recaptcha]');
    if (!netlifyRecaptcha.verify()) {
        e.preventDefault();
        alert('Por favor, complete el captcha antes de enviar el formulario');
    }
});