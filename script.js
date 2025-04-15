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
