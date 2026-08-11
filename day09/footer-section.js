/* ============================================
   FOOTER SECTION — JS
   Handles: auto-updating copyright year, and the
   back-to-top button's show/hide + scroll action.
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Auto-update copyright year ---- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Back-to-top button ---- */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    function updateBackToTop() {
      if (window.scrollY > 500) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    }

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Throttle scroll work with requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateBackToTop();
          ticking = false;
        });
        ticking = true;
      }
    });

    updateBackToTop(); // run once on load in case page is already scrolled
  }
});
