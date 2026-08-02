// Smooth scroll to the next section when "Explore My Work" is clicked
const exploreBtn = document.getElementById('explore-work-btn');
const target = document.getElementById('projects');

if (exploreBtn && target) {
  exploreBtn.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth' });
  });
}
