//Header script for the hamburger menu for small screens
// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    initMenu(); // Attach menu event listeners after injection
  });

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data)

function initMenu() {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (!menuIcon || !navLinks) return; // safety

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a:not(.dropbtn)").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Dropdown toggle (mobile only)
  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      dropdownContent.classList.toggle("open");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInsideDropdown = e.target.closest(".dropdown");
    if (!isClickInsideDropdown && window.innerWidth <= 768) {
      dropdownContent.classList.remove("open");
    }
  });
}




/***************** */
//Homepage slides
let slideIndex = 1;
let timer = null;

// Run slideshow only if slides exist
if (document.getElementsByClassName("slide").length > 0) {
  showSlides(slideIndex);
}

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

  // Stop here if no slides exist
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

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


//Accordion
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
// Run this script only on the homepage (index.html)
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {

  // ==========================
  // TESTIMONIAL SLIDESHOW
  // ==========================
  let testimonialIndex = 1;
  let testimonialTimer;

  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dots");

  function showTestimonials(n) {
    if (testimonialSlides.length === 0) return; // safety check

    if (n > testimonialSlides.length) testimonialIndex = 1;
    if (n < 1) testimonialIndex = testimonialSlides.length;

    // Hide all slides and remove active class
    testimonialSlides.forEach(slide => (slide.style.display = "none"));
    testimonialDots.forEach(dot => dot.classList.remove("active"));

    // Show current slide
    testimonialSlides[testimonialIndex - 1].style.display = "block";
    testimonialDots[testimonialIndex - 1].classList.add("active");
  }

  function nextTestimonial() {
    testimonialIndex++;
    showTestimonials(testimonialIndex);
  }

  function currentTestimonial(n) {
    testimonialIndex = n;
    showTestimonials(testimonialIndex);

    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(nextTestimonial, 5000);
  }

  // Initialize testimonials if present
  if (testimonialSlides.length > 0) {
    showTestimonials(testimonialIndex);
    testimonialTimer = setInterval(nextTestimonial, 5000);
  }

}




//Fade-in scroll
  const paragraphs = document.querySelectorAll('p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        //the animation only once
         //observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // 20% of the element visible triggers it
  });

  paragraphs.forEach(p => observer.observe(p));

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animate sections immediately on page load
  document.querySelectorAll('.fade-in-section').forEach(section => {
    section.classList.add('page-load');
  });

  // 2. Use IntersectionObserver for paragraphs and images
  const elements = document.querySelectorAll('.text-paragraph, .image-element');

  const options = { threshold: 0.15 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
});







//About us page script
// Counter animation script
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-number');

  const animateCounter = (counter, addPlus) => {
    const target = +counter.getAttribute('data-target');
    const duration = 1000; // animation duration in ms
    const stepTime = 20;   // speed of increments
    let current = 0;
    const increment = target / (duration / stepTime);

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
      } else {
        counter.textContent = target + (addPlus ? '+' : '');
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateCounter, stepTime);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(counters).indexOf(entry.target);
        // Add plus only for index 1 and 2 (last two counters)
        const addPlus = index > 0;
        animateCounter(entry.target, addPlus);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
});






