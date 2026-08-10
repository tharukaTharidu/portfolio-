/* ============================================
   CONTACT SECTION — JS
   Handles: scroll-reveal animation, button ripple
   micro-interaction, and basic form submit feedback.
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('#contact .reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    if (prefersReducedMotion) {
      el.classList.add('is-visible');
    } else {
      revealObserver.observe(el);
    }
  });

  /* ---- Ripple click micro-interaction ---- */
  function attachRipple(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      });
    });
  }
  attachRipple('#contact .btn-social, #contact .contact-form-wrap button');

  /* ---- Form submit feedback ----
     No backend is wired up here — this just prevents a real
     page reload and gives the user visual confirmation.
     Replace the setTimeout block with a fetch() call to your
     own endpoint (Formspree, EmailJS, your own API, etc.) when
     you're ready to actually send messages. */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        form.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }, 900);
    });
  }
});
