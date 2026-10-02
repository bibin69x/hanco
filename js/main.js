/**
 * HANCO Property Developers — Main Interactive Controller
 * Initializes Navigation, Project Carousel Controls & Editorial Transitions
 */

import { initNavigation } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Navigation & Mega-Menu
  initNavigation();

  // Initialize Architectural Hero Video Controller
  initHeroVideo();

  // Initialize Project Slider / Carousel Controls
  initProjectCarousel();

  // Subtle Scroll Fade Observer
  initScrollAnimations();
});

/**
 * Architectural Hero Video Controller
 * Ensures graceful autoplay, handles low-power / battery saver fallback,
 * and respects user preference for reduced motion.
 */
function initHeroVideo() {
  const video = document.querySelector('.hero-ref-video');
  if (!video) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function handleMotionPreference(e) {
    if (e.matches) {
      video.pause();
      video.removeAttribute('autoplay');
    } else {
      video.play().catch(() => {
        // Autoplay restricted by browser; poster remains visible gracefully
      });
    }
  }

  // Initial check
  if (motionQuery.matches) {
    video.pause();
    video.removeAttribute('autoplay');
  } else {
    // Attempt play in case inline autoplay requires initial invocation
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented by browser policy (e.g. Low Power Mode).
        // The poster image is already rendered and ensures a pristine visual presentation.
      });
    }
  }

  // Listen for changes to reduced motion setting
  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionPreference);
  }
}

/**
 * Project Slider / Carousel Controls
 */
function initProjectCarousel() {
  const cards = document.querySelectorAll('.project-card-ref');
  const prevBtn = document.querySelector('.carousel-controls-row .carousel-btn:first-child');
  const nextBtn = document.querySelector('.carousel-controls-row .carousel-btn:last-child');
  const slideIndicator = document.querySelector('.hero-slide-indicator');

  if (!cards.length) return;

  let activeIndex = 0;

  function updateActiveState(index) {
    activeIndex = (index + cards.length) % cards.length;
    
    // Toggle active classes on buttons if present
    if (prevBtn && nextBtn) {
      if (activeIndex === 0) {
        prevBtn.classList.remove('btn-active');
        nextBtn.classList.add('btn-active');
      } else if (activeIndex === cards.length - 1) {
        prevBtn.classList.add('btn-active');
        nextBtn.classList.remove('btn-active');
      } else {
        prevBtn.classList.add('btn-active');
        nextBtn.classList.add('btn-active');
      }
    }

    if (slideIndicator) {
      slideIndicator.textContent = `0${activeIndex + 1} / 02 / 03`;
    }

    // Scroll active card into view if needed
    if (cards[activeIndex]) {
      cards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  prevBtn?.addEventListener('click', () => updateActiveState(activeIndex - 1));
  nextBtn?.addEventListener('click', () => updateActiveState(activeIndex + 1));
}

/**
 * Editorial Scroll Fade Observer
 */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll('.project-card-ref, .approach-ref-grid, .location-hero-content, .estimate-cta-box');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    el.style.opacity = '0.94';
    el.style.transform = 'translateY(6px)';
    el.style.transition = 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
