// Add hover effect to cards for a slight animation
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
  const servicesData = [
    {
      title: 'Accreditation Services',
      description: 'NABH accreditation for Hospitals & Clinics, NABL & CAP accreditation for Laboratories, ISO 9001, 14001, 45001.',
      image: 'path-to-your-image1.jpg'
    },
    {
      title: 'Consultancy Services',
      description: 'Facilitation for Hospital Planning and Designing. Implementing Green Hospital Concepts like Solar Installations.',
      image: 'path-to-your-image2.jpg'
    },
    {
      title: 'Human Resource Management',
      description: 'Healthcare Manpower Recruitment, Soft Skill Training, Employee Satisfaction Surveys.',
      image: 'path-to-your-image3.jpg'
    },
    {
      title: 'Marketing and Branding',
      description: 'Sign Boards, Marketing Brochures, uniforms, etc.',
      image: 'path-to-your-image4.jpg'
    }
  ];
  
  const cardGrid = document.querySelector('.card-grid');
  
  // Dynamically generate service cards
  servicesData.forEach(service => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.src = service.image;
    image.alt = service.title;
  
    const title = document.createElement('h3');
    title.textContent = service.title;
  
    const description = document.createElement('p');
    description.textContent = service.description;
  
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
  
    cardGrid.appendChild(card);
  });
// Create scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scroll-to-top';
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.display = 'none';
document.body.appendChild(scrollToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
    