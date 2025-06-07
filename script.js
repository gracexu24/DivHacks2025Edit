// var counter = 0;

// function scrollAnimation() {
//         if ($("#mascot").hasClass("mable")) {
//             $("#mascot").attr("src", "images/mascots/mable-move.gif");
//         } else {
//             $("#mascot").attr("src", "images/mascots/w1c5-move.gif");
//     }
//     counter = 1;
// }

// function scrollAnimationStop() {
//         if ($("#mascot").hasClass("mable")) {
//             $("#mascot").attr("src", "images/mascots/mable-static.gif");
//         } else {
//             $("#mascot").attr("src", "images/mascots/w1c5-static.gif");
//     }

//     counter = 0;
// }

// function switchMascot() {
//     console.log("Mascot switched!")

//     $("#mascot").toggleClass("mable");
//     $("#mascot").toggleClass("w1c5");
// }

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
// }

// function loaderFade() {
//     $(".loader").fadeOut("slow");
// }

// function tracksFade() {
//     $("#character-container").fadeOut("slow");
//     $("#carouselExampleCaptions").toggleClass("not-here");
//     $("#wanderer-container").toggleClass("clickable");
//     $("#wanderer-container").toggleClass("not-clickable");
//     $("#wanderer-container").fadeIn("slow");
// }

// function tracksFadeIn() {
//     $("#character-container").fadeIn("slow");
//     $("#carouselExampleCaptions").toggleClass("not-here");
//     $("#wanderer-container").toggleClass("clickable");
//     $("#wanderer-container").toggleClass("not-clickable");
//     $("#wanderer-container").fadeOut("slow");
// }

// $(document).ready(function() {
//     //$("#character-container").fadeOut("slow");

//     $(window).scroll(function() {
//         reveal();
//         if (counter == 0) {
//             scrollAnimation();
//         }
//         clearTimeout($.data(this, 'scrollTimer'));
//         $.data(this, 'scrollTimer', setTimeout(function() {
//             scrollAnimationStop();
//         }, 300));
//     });

//     $(window).keyup(function(event) {
//         if (event.which==83) {
//             switchMascot();
//             scrollAnimationStop();
//         }
//     });

//     /*
//     $("#close").click(function() {
//         tracksFade();
//     });

//     $("#wanderer").click(function() {
//         tracksFadeIn();
//     });
//     */
// });

// Countdown Timer with Fade Animation
function updateCountdown() {
  const countDown = new Date("10/04/2025").getTime();
  const now = new Date().getTime();
  const distance = countDown - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update each number with animation
  updateNumber("days", days);
  updateNumber("hours", hours);
  updateNumber("minutes", minutes);
  updateNumber("seconds", seconds);

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-title").innerText = "The Hackathon Has Begun!";
    document.getElementById("clock-container").style.display = "none";
  }
}

function updateNumber(id, newValue) {
  const element = document.getElementById(id);
  const oldValue = parseInt(element.innerText);
  
  if (oldValue !== newValue) {
    // Add animation class
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = null;
    
    // Update the number
    element.innerText = newValue;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Scroll reveal animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);

// Parallax effect
function parallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  parallaxElements.forEach(element => {
    const scrolled = window.pageYOffset;
    element.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
}

window.addEventListener('scroll', parallax);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section, .row-section');
  sections.forEach(section => {
    section.classList.add('reveal');
  });
});

// Interactive cursor effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect to track cards
document.querySelectorAll('.track-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});
