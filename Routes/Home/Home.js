// window.onscroll = function() { stickyNav() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

const slides = document.querySelectorAll('.slidee');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('activee');
        if (i === index) {
            slide.classList.add('activee');
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);


//================================================================================


console.log(    `I'm well`)

const btnScrollTo = document.querySelector('.nav-link3');
const section3 = document.querySelector('#contact');

// const btnScrollTo3 = document.querySelector('.nav-link ');
// const section1 = document.querySelector('#about');

//+++-============------------------------=========================

const btnScrollTo4 = document.querySelector('.nav-link4 ');
const section4 = document.querySelector('#nav4'); 


//New Scroll Nav4
//  function scrollToSection(sectionId) {
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 section.scrollIntoView({ behavior: 'smooth' });
//             }
//         }





btnScrollTo.addEventListener('click', function (e){
  
  //Scroll Into View
//  window.scrollTo ({
//   left: s1scoords.left + window.pageXOffset,
//   top: s1scoords.top + window.pageYOffset, behavior: 'smooth',
//  })

// Modern Way
section3.scrollIntoView({
  behavior: 'smooth'
});  

})

// btnScrollTo3.addEventListener('click', function (e){
  
//   //Scroll Into View
// //  window.scrollTo ({
// //   left: s1scoords.left + window.pageXOffset,
// //   top: s1scoords.top + window.pageYOffset, behavior: 'smooth',
// //  })

// // Modern Way
// section1.scrollIntoView({
//   behavior: 'smooth'
// });  


//+++++++++++==========================================
btnScrollTo4.addEventListener('click', function (e){
  
  //Scroll Into View
//  window.scrollTo ({
//   left: s1scoords.left + window.pageXOffset,
//   top: s1scoords.top + window.pageYOffset, behavior: 'smooth',
//  })

// Modern Way
section4.scrollIntoView({
  behavior: 'smooth'
});  

})




//========================Reveal Section As We Approach=====================================================
const allSectionss = document.querySelectorAll('.nav--link');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver (revealSection, {
  root: null,
  threshold: 0.15,
})


allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('nav--link');
})

//Chat bounce

//  const sections = document.querySelectorAll("section");

//     const fadeUpOnScroll = () => {
//       sections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= window.innerHeight * 0.75) {
//           section.classList.add("visible");
//         }
//       });
//     };

//     // Trigger on scroll and initial load
//     window.addEventListener("scroll", fadeUpOnScroll);
//     window.addEventListener("load", fadeUpOnScroll);