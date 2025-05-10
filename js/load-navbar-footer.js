// Load Navbar
fetch('includes/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });

// Load Footer
fetch('includes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

  // Load navbar (your existing code)
fetch('includes/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-placeholder').innerHTML = data;
  
  // --- NEW CODE: Highlight current tab ---
  const currentPage = window.location.pathname.split('/').pop(); // Gets "about.html"
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop(); // Gets "about.html" from href
    if (linkPage === currentPage) {
      link.classList.add('active'); // Adds class ONLY to the current tab
    }
  });
});