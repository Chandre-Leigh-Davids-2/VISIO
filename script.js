// Navigation Bar
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Carousel

let slideIndex = 1; // Start at the first slide
let timer; // Variable to track the timer

function showSlidesMove() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Reset slideIndex if out of bounds
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  // Show the current slide and highlight the active dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Clear and reset the timer
  clearTimeout(timer);
  timer = setTimeout(() => {
    slideIndex++;
    showSlidesMove();
  }, 5000);
}

function plusSlides(n) {
  slideIndex += n;
  showSlidesMove();
}

function currentSlide(n) {
  slideIndex = n;
  showSlidesMove();
}

// Start the slideshow
showSlidesMove();
