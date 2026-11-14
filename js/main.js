// Code Editor (TermCode IDE) - Accessible Interactive Scripts

let lastFocusedElement = null;

function openLightbox(src, altText) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const closeBtn = modal ? modal.querySelector('.lightbox-close') : null;

  if (modal && img) {
    lastFocusedElement = document.activeElement;
    img.src = src;
    img.alt = altText || 'Zoomed Screenshot Preview';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for keyboard & screen reader accessibility
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox');
  if (modal && modal.classList.contains('active')) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus to previously focused element
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Setup on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth anchor scrolling
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Keyboard accessibility for zoomable screenshot frames
  const zoomableFrames = document.querySelectorAll('.mobile-frame');
  zoomableFrames.forEach(frame => {
    frame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        frame.click();
      }
    });
  });
});
