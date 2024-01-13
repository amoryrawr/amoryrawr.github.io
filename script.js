const weddingDate = new Date("2025-05-25T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = weddingDate - now;

  if (timeDifference <= 0) {
    document.getElementById("countdown-text").innerHTML = "The wedding has passed!";
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownString = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    document.getElementById("countdown-text").classList.add("countdown-animation");

    setTimeout(() => {
      document.getElementById("countdown-text").innerHTML = countdownString;
      document.getElementById("countdown-text").classList.remove("countdown-animation");
    }, 500);
  }
}

setInterval(updateCountdown, 1000);
let sr;

document.addEventListener("DOMContentLoaded", function () {
  sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 200,
    reset: true,
  });

  const revealItems = document.querySelectorAll('.reveal-item');
  sr.reveal(revealItems, { delay: 200, origin: 'top' });
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const toggleIcon = document.getElementById('toggleIcon');


document.addEventListener('DOMContentLoaded', () => {
  const savedMode = getCookie('darkMode');
  if (savedMode === 'true') {
    setDarkMode(true);
  }
});

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const isDarkMode = !body.classList.contains('dark-mode');
  setDarkMode(isDarkMode);
  saveDarkModeCookie(isDarkMode);
}

function setDarkMode(isDarkMode) {
  body.classList.toggle('dark-mode', isDarkMode);
  toggleIcon.classList.toggle('fa-moon', !isDarkMode);
  toggleIcon.classList.toggle('fa-sun', isDarkMode);

  if (isDarkMode) {
    revealDarkMode();
  }
}

function saveDarkModeCookie(isDarkMode) {
  setCookie('darkMode', isDarkMode.toString(), 365); 
}

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires}; path=/`;
}

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : null;
}

function deleteCookie(name) {
  setCookie(name, null, -1);
}

function revealDarkMode() {
  ScrollReveal().reveal('.reveal-item', {
    duration: 1000,
    distance: '20px',
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100,
  });
}
