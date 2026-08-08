// Handles opening custom project links when clicking on cards with a data-link attribute
document.querySelectorAll('.project-card[data-link]').forEach(card => {
  card.addEventListener('click', () => {
    const targetUrl = card.dataset.link;
    if (targetUrl) {
      window.open(targetUrl, '_blank');
    }
  });
});