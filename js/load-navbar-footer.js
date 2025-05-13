document.addEventListener('DOMContentLoaded', () => {
  // Fetch and load the navbar
  fetch('includes/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Highlight the active link
      const currentPage = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.navlist a');

      navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
          link.classList.add('active'); // Adds class ONLY to the current tab
        }
      });

      // Add event listener for the hamburger menu
      const menu = document.querySelector('#menu-icon');
      const navlist = document.querySelector('.navlist');

      if (menu && navlist) {
        menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navlist.classList.toggle('open');
        };
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});