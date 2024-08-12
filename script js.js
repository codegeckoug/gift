document.getElementById('openButton').addEventListener('click', function() {
  document.querySelector('.cover').style.display = 'none';
  document.querySelector('.inside').style.display = 'block';
  document.getElementById('birthday-audio').play();
  startSlideshow();
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.querySelector('.inside').style.display = 'none';
  document.querySelector('.cover').style.display = 'block';
});
function startSlideshow() {
  const slides = document.querySelectorAll('.slideshow .slide');
  let currentSlide = 0;

  slides[currentSlide].classList.add('active');

  setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  }, 3000); // Change slide every 3 seconds
}