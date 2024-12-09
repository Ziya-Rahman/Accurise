// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Back to Top button functionality
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.id = 'back-to-top'; // Assign ID for consistency with CSS
  document.body.appendChild(backToTopButton);
  
  // Show or hide the Back to Top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add('show'); // Use CSS class to control visibility
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  // Scroll to top when Back to Top button is clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Fade-in animations for sections
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.2 };
  
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class to animate
        observer.unobserve(entry.target); // Stop observing after it's visible
      }
    });
  }, observerOptions);
  
  // Initialize sections as hidden and observe them
  sections.forEach(section => {
    section.classList.add('hidden'); // Initially hidden
    sectionObserver.observe(section); // Start observing
  });
  