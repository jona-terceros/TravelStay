
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

updateCarousel();
