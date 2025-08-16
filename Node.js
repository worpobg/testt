let currentSlide = 0;
const slides = document.querySelectorAll('.mySlides');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');
  });

  let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  let nextIndex = (currentSlide + 1) % slides.length;

  slides[prevIndex].classList.add('prev');
  slides[currentSlide].classList.add('active');
  slides[nextIndex].classList.add('next');
}

function plusSlides(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  updateSlides();
}

// Swipe support
let touchStartX = 0;
const container = document.querySelector('.slideshow-container');

container.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', function (e) {
  let touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    plusSlides(1);
  } else if (touchEndX - touchStartX > 50) {
    plusSlides(-1);
  }
});

function playMusic() {
  const bgm = document.getElementById("bgm");
  bgm.play();
}

window.onload = () => {
  updateSlides();
};
