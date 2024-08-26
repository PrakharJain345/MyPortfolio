// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle profile picture upload
const fileInput = document.getElementById('file-input');
const profilePic = document.querySelector('.profile-pic img');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profilePic.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Add visibility animation to sections
document.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentIndex = sections.length;

    sections.forEach((section, index) => {
        if (window.scrollY + 50 >= section.offsetTop) {
            currentIndex = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove('active');
        if (index === currentIndex) {
            link.classList.add('active');
        }
    });
});


