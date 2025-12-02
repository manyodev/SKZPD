// BGM
document.getElementById("bgm-art").onclick = function() {
var audio = document.getElementById("BGM");
const playPauseIcon = document.querySelector('.play-pause');
if (audio.paused) {
    audio.play();
    playPauseIcon.style.animationPlayState = 'running';
} else {
    audio.pause();
    playPauseIcon.style.animationPlayState = 'paused';
}
};

// Countdown Timer
// Goal Date
var countDownDate = new Date("Nov 21, 2025 00:00:00").getTime();

// Update every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "RELEASED";
  }
}, 1000);
// Switch Pages
function showAboutPage() {
  document.querySelector(".home-page").classList.remove("show");
  document.querySelector(".home-page").classList.add("hide");
  document.querySelector(".contact-page").classList.remove("show");
  document.querySelector(".contact-page").classList.add("hide");
  document.querySelector(".about-page").classList.remove("hide");
  document.querySelector(".about-page").classList.add("show");
}
function showHomePage() {
  document.querySelector(".about-page").classList.remove("show");
  document.querySelector(".about-page").classList.add("hide");
  document.querySelector(".contact-page").classList.remove("show");
  document.querySelector(".contact-page").classList.add("hide");
  document.querySelector(".home-page").classList.remove("hide");
  document.querySelector(".home-page").classList.add("show");
}
function showContactPage() {
  document.querySelector(".home-page").classList.remove("show");
  document.querySelector(".home-page").classList.add("hide");
  document.querySelector(".about-page").classList.remove("show");
  document.querySelector(".about-page").classList.add("hide");
  document.querySelector(".contact-page").classList.remove("hide");
  document.querySelector(".contact-page").classList.add("show");
}
// Scroll to Top Button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// Sidebar Navigation
function openNav() {
  document.querySelector(".sidebar").style.width = "20vw";
}

function closeNav() {
  document.querySelector(".sidebar").style.width = "0";
}

document.querySelector(".sidebarbtn").onclick = function() {
  var sidebar = document.querySelector(".sidebar");
  if (sidebar.style.width === "20vw") {
    closeNav();
  } else {
    openNav();
  }
};