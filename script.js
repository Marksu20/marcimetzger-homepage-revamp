document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Gallery hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Search form functionality
const searchForm = document.querySelector('.search-form');
const searchButton = searchForm.querySelector('button');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Add search functionality here
  alert('Search functionality would be implemented here!');
});

// Gallery slider functionality
function changeFeaturedImage(imageSrc, title) {
  const featuredImage = document.getElementById('featured-image');
  const titleElement = featuredImage.parentElement.querySelector('h3');
  
  // Add fade effect
  featuredImage.style.opacity = '0';
  
  setTimeout(() => {
    featuredImage.src = imageSrc;
    if (titleElement) {
      titleElement.textContent = title;
    }
    featuredImage.style.opacity = '1';
  }, 250);
  
  // Update active thumbnail
  document.querySelectorAll('#gallery-slider img').forEach(img => {
    img.classList.remove('opacity-100', 'border-primary');
    img.classList.add('opacity-70', 'border-transparent');
  });
  
  event.target.classList.remove('opacity-70', 'border-transparent');
  event.target.classList.add('opacity-100', 'border-primary');
}

function scrollSlider(direction) {
  const slider = document.getElementById('gallery-slider');
  const scrollAmount = 200; // Adjust scroll amount as needed
  
  if (direction === -1) {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Initialize gallery slider
document.addEventListener('DOMContentLoaded', function() {
  // Set first thumbnail as active
  const firstThumbnail = document.querySelector('#gallery-slider img');
  if (firstThumbnail) {
    firstThumbnail.classList.remove('opacity-70', 'border-transparent');
    firstThumbnail.classList.add('opacity-100', 'border-primary');
  }
  
  // Add touch/swipe support for mobile
  let startX = 0;
  let scrollLeft = 0;
  const slider = document.getElementById('gallery-slider');
  
  if (slider) {
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});