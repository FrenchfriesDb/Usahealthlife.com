let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay: 200, origin: 'top'});
sr.reveal('.hero-img',{delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'left'});
sr.reveal('.scroll-down',{delay: 500, origin: 'right'});

document.addEventListener('DOMContentLoaded', () => {
    // Load the navbar
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Add event listener for the hamburger menu after navbar is loaded
            const menu = document.querySelector('#menu-icon');
            const navlist = document.querySelector('.navlist');

            menu.onclick = () => {
                menu.classList.toggle('bx-x');
                navlist.classList.toggle('open');
            };
        })
        .catch(error => console.error('Error loading navbar:', error));
});