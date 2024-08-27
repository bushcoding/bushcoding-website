window.addEventListener('scroll', () => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const currentLink = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            currentLink.classList.add('active');
        }
    });
});


document.querySelectorAll("nav ul li a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById('click').checked = false;
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
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