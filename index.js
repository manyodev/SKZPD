/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "black-swan";
  }

  return "white-swan";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "White Swan" : "Black Swan";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({
  buttonEl: button,
  isDark: currentThemeSetting === "black-swan",
});
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
  const newTheme =
    currentThemeSetting === "black-swan" ? "white-swan" : "black-swan";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "black-swan" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

/** */
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied email !";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Get email";
}
// BGM
document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio();
  const trackTitle = document.querySelector(".track-title");
  const playPauseBtn = document.querySelector(".play-pause");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const progressBar = document.querySelector(".progress-bar");
  const pauseIcon = document.querySelector("#pauseIcon");

  const trackList = [
    {
      src: "Levanter.mp3",
      title: "Levanter",
      artist: "Stray Kids",
    },
    {
      src: "Sunshine.mp3",
      title: "Sunshine",
      artist: "Stray Kids",
    },
    {
      src: "0801.mp3",
      title: "0801",
      artist: "Stray Kids",
    },
    {
      src: "Mixtape_OnTrack.mp3",
      title: "Mixtape: On Track",
      artist: "Stray Kids",
    },
    {
      src: "StarLost.mp3",
      title: "Star Lost",
      artist: "Stray Kids",
    },
  ];

  let currentTrack = 0;
  let isPlaying = true;

  function loadTrack(index) {
    const current = trackList[index];
    audio.src = current.src;
    if (trackTitle) trackTitle.textContent = current.title;

    if (isPlaying) {
      audio.play();
      if (pauseIcon) {
        pauseIcon.classList.remove("fa-play");
        pauseIcon.classList.add("fa-pause");
      }
    }
  }

  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      if (pauseIcon) {
        pauseIcon.classList.remove("fa-pause");
        pauseIcon.classList.add("fa-play");
      }
    } else {
      audio.play();
      if (pauseIcon) {
        pauseIcon.classList.remove("fa-play");
        pauseIcon.classList.add("fa-pause");
      }
    }
    isPlaying = !isPlaying;
  }

  function updateProgress() {
    if (audio.duration && progressBar) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
    }

    if (audio.ended) {
      nextTrack();
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % trackList.length;
    loadTrack(currentTrack);
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrack);
  }

  const progressContainer = document.querySelector(".progress-container");
  if (progressContainer) {
    progressContainer.addEventListener("click", (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressContainerWidth = rect.width;
      const seekTime =
        (clickPosition / progressContainerWidth) * audio.duration;
      audio.currentTime = seekTime;
    });
  }

  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlayPause);
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);
  if (prevBtn) prevBtn.addEventListener("click", prevTrack);
  audio.addEventListener("timeupdate", updateProgress);

  loadTrack(0);
  audio.play();
  if (pauseIcon) {
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
  }
});
//
let mybutton = document.getElementById("topButton");
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
