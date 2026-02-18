document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconMenu = btnMenu.querySelector('.material-symbols-outlined');
    const links = menu.querySelectorAll('a');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        iconMenu.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            iconMenu.textContent = 'menu';
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menu.classList.add('hidden');
            iconMenu.textContent = 'menu';
        }
    });

    const themeToggleDesktop = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    function toggleTheme() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            htmlElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }

    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
});