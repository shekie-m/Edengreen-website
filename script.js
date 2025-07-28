  // Load the header
    fetch("header.html")
      .then(res => res.text())
      .then(data => document.getElementById("header").innerHTML = data);

    // Load the footer
    fetch("footer.html")
      .then(res => res.text())
      .then(data => document.getElementById("footer").innerHTML = data);



let slideIndex = 1;
let timer = null;

showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Automatic change every 5 seconds
  timer = setTimeout(() => { showSlides(slideIndex += 1); }, 5000);
}




  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-item.active');

      // Close the previously open accordion
      if (openItem && openItem !== header.parentElement) {
        openItem.classList.remove('active');
        openItem.querySelector('.accordion-content').style.maxHeight = 0;
        openItem.querySelector('.icon').textContent = '+';
      }

      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.icon');

      if (item.classList.contains('active')) {
        item.classList.remove('active');
        content.style.maxHeight = 0;
        icon.textContent = '+';
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = '–';
      }
    });
  });



  
//Testimonials
let testimonialIndex = 1;
let testimonialTimer;

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dots");

function showTestimonials(n) {
  if (n > slides.length) testimonialIndex = 1;
  if (n < 1) testimonialIndex = slides.length;

  // Hide all slides and remove active from all dots
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  // Show current slide and mark dot as active
  slides[testimonialIndex - 1].style.display = "block";
  dots[testimonialIndex - 1].classList.add("active");
}

function nextTestimonial() {
  testimonialIndex++;
  showTestimonials(testimonialIndex);
}

function currentTestimonial(n) {
  testimonialIndex = n;
  showTestimonials(testimonialIndex);

  // Reset the timer when a dot is clicked
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(nextTestimonial, 5000);
}

// Initial display
showTestimonials(testimonialIndex);
// Automatic slideshow every 5 seconds
testimonialTimer = setInterval(nextTestimonial, 5000);



  const paragraphs = document.querySelectorAll('p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Uncomment next line if you want the animation only once
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // 20% of the element visible triggers it
  });

  paragraphs.forEach(p => observer.observe(p));





