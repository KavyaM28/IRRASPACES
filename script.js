// script.js

// 🌐 1. 📱 Mobile Menu Toggle + X toggle + Auto-close
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
    toggle.classList.toggle('active'); // For animation
    navLinks.classList.toggle('show'); // Show/Hide menu
    });

    // Close mobile menu on nav link click
    const links = navLinks.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          toggle.classList.remove('show');
        }
      });
    });
  }

  // Run reveal on first load
  revealOnScroll();

  // 💌 Form Validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = form.querySelector("input[name='Name']");
      const email = form.querySelector("input[name='Email']");
      const message = form.querySelector('textarea');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields.');
        e.preventDefault();
      } else if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        e.preventDefault();
      }
    });
  }
});

// ✨ 2. Reveal Elements on Scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
