// carrusel

let currentSlide = 0;
let isAnimating = false;

function showSlide(index) {
    if (isAnimating) return; // Evita que se cambien las diapositivas mientras está en transición

    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-images img').length;
    currentSlide = (index + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;

    isAnimating = true; // Marca que está en animación
    setTimeout(() => {
        isAnimating = false; // Libera la animación después de 500ms
    }, 500);

    document.querySelectorAll('.carousel-indicators span').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlideCarrusel() {
    showSlide(currentSlide + 1);
}

function prevSlideCarrusel() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// carrusel de compras

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-compras');
    const totalSlides = document.querySelectorAll('.carousel-item-compras').length;
    const slideWidth = document.querySelector('.carousel-item-compras').clientWidth;

    // Calcula el nuevo desplazamiento
    slides.style.transform = `translateX(${-index * slideWidth * 4}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item-compras').length;
    const visibleSlides = 4; // Cantidad de imágenes por slide

    slideIndex = (slideIndex + 1) % Math.ceil(totalSlides / visibleSlides);
    showSlide(slideIndex);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item-compras').length;
    const visibleSlides = 4; // Cantidad de imágenes por slide

    slideIndex = (slideIndex - 1 + Math.ceil(totalSlides / visibleSlides)) % Math.ceil(totalSlides / visibleSlides);
    showSlide(slideIndex);
}

// Inicializa el primer slide
showSlide(slideIndex);

//menu desblegable

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').style.right = '0';
});

document.querySelector('.sidebar').addEventListener('click', function () {
    document.querySelector('.sidebar').style.right = '-250px';
});