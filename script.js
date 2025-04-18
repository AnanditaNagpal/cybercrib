document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleDark');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Thanks for contacting me! I'll get back to you soon.");
        });
    }
});


// Toggle dark mode
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
});
