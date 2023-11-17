const sliderControls = document.querySelectorAll('#index_slider-controls li');
const prevBtn = document.querySelector('.index_slider-prev');
const nextBtn = document.querySelector('.index_slider-next');
const header = document.querySelector('#index_slider-header');

let currentSlide = 0;

function showSlide(n) {
  sliderControls[currentSlide].classList.remove('active');
  currentSlide = (n + sliderControls.length) % sliderControls.length;
  sliderControls[currentSlide].classList.add('active');
  const selectedColor = sliderControls[currentSlide].getAttribute('data-color');
  header.style.backgroundColor = selectedColor;
  const prevSlide = sliderControls[currentSlide - 1 < 0 ? sliderControls.length - 1 : currentSlide - 1];
  const prevColor = prevSlide.getAttribute('data-color');
  header.style.borderBottomColor = prevColor;
  if (currentSlide === 3) { // Check if current slide number is 3 (slide 4)
    header.style.transition = 'color 0.5s ease'; // Add a transition to the font color property
    header.style.color = 'black'; // Set font color to black
  } else {
    header.style.color = 'rgb(242, 232, 207)';
  }
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentSlide);
