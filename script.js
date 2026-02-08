document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('toggle');
        });
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('toggle');
        });
    });

    // 2. Animação de Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que queremos animar
    const animatedElements = document.querySelectorAll('.card, h2, .sobre-content, .intro-content, .intro-image, .faq-item, #faq h2');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Accordion (FAQ) - Vamos criar essa seção jaja
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fecha outros abertos (opcional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
});