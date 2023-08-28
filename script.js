const slides = document.querySelectorAll ('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display=i === index? 'block': 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.getElementById('prevButton');
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 1500);



