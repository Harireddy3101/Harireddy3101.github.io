console.log('Animation script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    const introAnimation = document.querySelector('.intro-animation') as HTMLElement;
    const introText = document.querySelector('.intro-text') as HTMLElement;
    const content = document.querySelector('.content') as HTMLElement;
    const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;

    // Theme switcher
    const toggleTheme = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.toString());
        updateThemeToggleText();
    };

    const updateThemeToggleText = () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    };

    // Check for saved theme preference or use user's system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true' || (savedTheme === null && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    updateThemeToggleText();

    // Ensure the theme toggle button is clickable
    themeToggle.addEventListener('click', toggleTheme);

    // Intro animation
    const startIntroAnimation = () => {
        introText.style.opacity = '1';
        introText.style.transform = 'scale(1)';

        setTimeout(() => {
            introText.style.opacity = '0';
            introText.style.transform = 'scale(1.5)';
            
            setTimeout(() => {
                introAnimation.style.transform = 'scaleX(0)';
                introAnimation.style.transformOrigin = 'right';
                
                setTimeout(() => {
                    introAnimation.style.display = 'none';
                    revealContent();
                }, 500);
            }, 500);
        }, 1500);
    };

    // Remove the observeElements function and its call

    const revealContent = () => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        // Remove the observeElements() call
    };

    // Start the intro animation
    startIntroAnimation();

    // Log to console for debugging
    console.log('DOMContentLoaded event fired');
    console.log('Theme toggle button:', themeToggle);

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle') as HTMLElement;
    const navMenu = document.querySelector('nav ul') as HTMLElement;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                navMenu.classList.remove('show');
            }
        });
    });
});

// Log to console for debugging
console.log('Script loaded');
