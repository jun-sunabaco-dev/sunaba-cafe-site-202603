const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

// スライダー用
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.hero-slider');
const dots = document.querySelectorAll('.dot');

if (slides.length > 0 && prevBtn && nextBtn && slider) {
  let currentIndex = 0;
  let slideInterval;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex = index;

  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
  }

  function startSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopSlide() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener('click', () => {
    stopSlide();
    nextSlide();
    startSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopSlide();
    prevSlide();
    startSlide();
  });

  // ホバーで停止
  slider.addEventListener('mouseenter', stopSlide);
  slider.addEventListener('mouseleave', startSlide);

  startSlide();
}

// ナビメニュー
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