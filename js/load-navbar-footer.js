document.addEventListener('DOMContentLoaded', () => {
  // Load navbar and footer in parallel
  const loadPromises = [
    fetch('includes/navbar.html').then(res => res.text()),
    fetch('includes/footer.html').then(res => res.text())
  ];

  Promise.all(loadPromises)
    .then(([navbarData, footerData]) => {
      // Insert navbar and footer
      document.getElementById('navbar-placeholder').innerHTML = navbarData;
      document.getElementById('footer-placeholder').innerHTML = footerData;

      // Set up current page highlighting
      const currentPage = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.navbar a');

      navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => {
      console.error('Error loading components:', error);
    });
});