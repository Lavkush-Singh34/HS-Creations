// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  });
  
  // corouse effets
  
  // let currentIndex = 1; // Start with the first image
  // const totalImages = 3; // Total number of images
  
  // setInterval(() => {
  //   currentIndex = (currentIndex % totalImages) + 1; // Cycle through images
  //   document.getElementById(`img-${currentIndex}`).checked = true; // Check the next radio button
  // }, 2000); // Change image every 2 seconds
  

// navigation bar to hamburger menu
const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });