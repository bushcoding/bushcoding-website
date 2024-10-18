document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);
        
        const navbarHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navbarHeight,
            behavior: 'smooth'
        });

        document.getElementById('click').checked = false;
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
