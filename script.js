// Tab switching (Home / Projects)
const tabs = document.querySelectorAll('.nav-left a[data-tab]');
const sections = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = tab.getAttribute('data-tab');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));
    // Show target section
    document.getElementById(target).classList.add('active');
  });
});

// Resume modal
const resumeLink = document.getElementById('resume-link');
const modal = document.getElementById('resume-modal');
const closeBtn = document.querySelector('.close-btn');

resumeLink.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicking outside content
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
