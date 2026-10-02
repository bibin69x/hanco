/**
 * HANCO Property Developers — Navigation Module
 * Handles Editorial Mega-Menu, Sticky Header & Mobile Drawer Accessibility
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const megaToggle = document.querySelector('[data-mega-toggle]');
  const megaPanel = document.querySelector('.mega-panel');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  // Sticky Header Scroll Listener
  function handleScroll() {
    if (window.scrollY > 24) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mega Menu Keyboard & Click Accessibility
  if (megaToggle && megaPanel) {
    megaToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = megaToggle.getAttribute('aria-expanded') === 'true';
      setMegaMenuState(!isExpanded);
    });

    // Close mega-menu on click outside
    document.addEventListener('click', (e) => {
      if (!megaToggle.contains(e.target) && !megaPanel.contains(e.target)) {
        setMegaMenuState(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setMegaMenuState(false);
        setMobileDrawerState(false);
      }
    });
  }

  function setMegaMenuState(open) {
    if (!megaToggle || !megaPanel) return;
    megaToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      megaPanel.classList.add('is-open');
    } else {
      megaPanel.classList.remove('is-open');
    }
  }

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      setMobileDrawerState(!isExpanded);
    });

    // Close drawer when any mobile drawer link is clicked
    const drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMobileDrawerState(false);
      });
    });
  }

  function setMobileDrawerState(open) {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      mobileDrawer.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }
}
