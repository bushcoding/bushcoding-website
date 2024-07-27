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
    const copyIcon = document.getElementById('copy-icon');
    navigator.clipboard.writeText(email).then(() => {
        copyIcon.classList.remove('fa-copy');
        copyIcon.classList.add('fa-check');
        setTimeout(() => {
            copyIcon.classList.remove('fa-check');
            copyIcon.classList.add('fa-copy');
        }, 1500);
    }, (err) => {
        console.error('Error copying email: ', err);
    });
});

const form = document.querySelector('form');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
    const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;
    if (recaptchaResponse === '') {
        e.preventDefault();
        errorMessage.textContent = 'Please solve the captcha before submitting the form';
    }
});