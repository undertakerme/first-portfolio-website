// Smooth Scroll Functionality for Navigation Links (if added)
const scrollToElement = (selector) => {
    const element = document.querySelector(selector);
    window.scrollTo({
      top: element.offsetTop - 60, // Offset for header space
      behavior: 'smooth',
    });
  };
  
  // Adding an event listener to the contact button to show an alert
  const contactButton = document.querySelector('.contact-button');
  if (contactButton) {
    contactButton.addEventListener('click', () => {
      alert("Thank you for your interest! You can reach out via email.");
    });
  }
  
  // Function to change background color of header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#ffcc00'; // Change to a new color when scrolling
    } else {
      header.style.backgroundColor = 'linear-gradient(to right, #d41ad4, #3155d3)';
    }
  });
  
  // Hover animation for social icons
  const socialIcons = document.querySelectorAll('.fa');
  socialIcons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });
  
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
  
  // Typing animation for the "ABOUT ME" section
  const aboutMe = document.querySelector('.about p');
  if (aboutMe) {
    const text = aboutMe.textContent;
    let currentIndex = 0;
    aboutMe.textContent = ''; // Clear existing text
  
    const typeWriterEffect = () => {
      if (currentIndex < text.length) {
        aboutMe.textContent += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriterEffect, 50); // Adjust speed of typing
      }
    };
  
    typeWriterEffect();
  }
  
  // Function to toggle dark mode (optional feature)
  const toggleDarkMode = () => {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    }
  };
  
  // Button to toggle dark mode (add this button to your HTML in a suitable place)
  const darkModeButton = document.querySelector('.dark-mode-button');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }
  
  // Checking for the mode in local storage and applying the theme
  window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
  