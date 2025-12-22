// Menú hamburguesa para móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animación del botón hamburguesa
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Prevenir envío del formulario (para demo)
const contactForm = document.querySelector('.contacto-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado al cosmos!');
    contactForm.reset();
});

// Smooth scroll mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',behavior: 'smooth',
block: 'start'
});
}
});
});// Animación al hacer scroll
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);// Observar todos los elementos que queremos animar
document.querySelectorAll('.planeta-card, .galaxia-item, .dato-card, .galeria-item').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(20px)';
el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(el);
});// Cambiar estilo del header al hacer scroll
let lastScroll = 0;
const header = document.querySelector('header');window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;if (currentScroll > 100) {
    header.style.padding = '0.5rem 0';
    header.style.background = 'rgba(10, 14, 39, 0.98)';
} else {
    header.style.padding = '1rem 0';
    header.style.background = 'rgba(10, 14, 39, 0.95)';
}lastScroll = currentScroll;
});