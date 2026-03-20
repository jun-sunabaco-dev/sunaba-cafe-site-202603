const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

const heroImg = document.querySelector('.hero-image img');

if (heroImg) {
  heroImg.style.opacity = 0;

  setTimeout(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 18) {
      heroImg.src = './assets/hero.png';
    } else {
      heroImg.src = './assets/hero_Night.png';
    }

    heroImg.style.opacity = 1;
  }, 200);
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
