/**
 * HANCO Property Developers — Dedicated 5-Step Estimator Controller
 */

export function initFullEstimator() {
  const steps = document.querySelectorAll('.step-panel');
  const indicators = document.querySelectorAll('.step-indicator-item');
  const btnNext = document.querySelector('[data-step-next]');
  const btnPrev = document.querySelector('[data-step-prev]');
  const sidebarMatch = document.querySelector('[data-sidebar-match]');
  const sidebarPrice = document.querySelector('[data-sidebar-price]');
  const sidebarLocation = document.querySelector('[data-sidebar-location]');
  const sidebarConfig = document.querySelector('[data-sidebar-config]');

  let currentStep = 1;
  const maxSteps = 5;

  const userSelections = {
    purpose: 'Family Residence',
    location: 'Stadium Bypass Road',
    config: '3 BHK (1,480 sq.ft)',
    budget: '₹80 Lakhs – ₹1.15 Crore',
    priority: 'Rooftop Pool & Wellness'
  };

  // Option Click Handler
  const options = document.querySelectorAll('.option-card-radio');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const field = opt.dataset.field;
      const val = opt.dataset.val;

      // Unselect siblings
      const siblings = opt.parentElement.querySelectorAll('.option-card-radio');
      siblings.forEach(s => s.classList.remove('is-selected'));

      opt.classList.add('is-selected');
      userSelections[field] = val;

      updateSidebar();
    });
  });

  // Next / Prev Actions
  btnNext?.addEventListener('click', () => {
    if (currentStep < maxSteps) {
      currentStep++;
      renderStep();
    } else {
      // Show Final Completion Modal / Screen
      currentStep = 6;
      renderStep();
    }
  });

  btnPrev?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      renderStep();
    }
  });

  function renderStep() {
    steps.forEach((panel, idx) => {
      if (idx + 1 === currentStep) {
        panel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });

    indicators.forEach((ind, idx) => {
      if (idx + 1 === currentStep) {
        ind.classList.add('is-active');
      } else if (idx + 1 < currentStep) {
        ind.classList.add('is-completed');
        ind.classList.remove('is-active');
      } else {
        ind.classList.remove('is-active', 'is-completed');
      }
    });

    if (btnPrev) {
      btnPrev.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    }

    if (btnNext) {
      btnNext.textContent = currentStep === maxSteps ? 'Calculate Final Match →' : 'Continue to Next Step →';
    }

    updateSidebar();
  }

  function updateSidebar() {
    let matchedProject = 'Hanco Fort Heights';
    let priceEst = '₹78L – ₹1.12 Cr';

    if (userSelections.location.includes('Vadakkanthara') || userSelections.budget.includes('₹45L')) {
      matchedProject = 'Hanco Krishna Leela';
      priceEst = '₹44.98L – ₹82.5L';
    } else if (userSelections.location.includes('Mattumantha') || userSelections.priority.includes('Riverfront')) {
      matchedProject = 'Hanco Sivam';
      priceEst = '₹58L – ₹94L';
    }

    if (sidebarMatch) sidebarMatch.textContent = matchedProject;
    if (sidebarPrice) sidebarPrice.textContent = priceEst;
    if (sidebarLocation) sidebarLocation.textContent = userSelections.location;
    if (sidebarConfig) sidebarConfig.textContent = userSelections.config;
  }

  renderStep();
}
