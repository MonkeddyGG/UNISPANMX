document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. MENU MÓVIL (HAMBURGUESA) ---
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Alternar ícono
        const icon = burger.querySelector('i');
        if (nav.classList.contains('nav-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al dar click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            const icon = burger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- 3. HERO SLIDER AUTOMÁTICO ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Cambiar cada 5 segundos

    function nextSlide() {
        // Quitar la clase active del actual
        slides[currentSlide].classList.remove('active');
        // Calcular el índice del siguiente
        currentSlide = (currentSlide + 1) % slides.length;
        // Agregar la clase active al nuevo
        slides[currentSlide].classList.add('active');
    }

    // Iniciar el slider
    if (slides.length > 1) {
        setInterval(nextSlide, slideInterval);
    }

});