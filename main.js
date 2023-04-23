const openMobileNav = document.getElementById('open-menu-icon')
const closeMobileNav = document.getElementById('close-menu-icon')
const mobileNav = document.querySelector('nav')

openMobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle('nav-open')
    closeMobileNav.classList.toggle('display')
    openMobileNav.classList.toggle('no-display')
})

closeMobileNav.addEventListener("click", () => {
    mobileNav.classList.remove('nav-open')
    openMobileNav.classList.remove('no-display')
    closeMobileNav.classList.remove('display')
})

// Set the date to countdown to (YYYY-MM-DD)
const countdownDate = new Date('2023-05-13').getTime();

// Update the countdown timer every 1 second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').innerText = ('0' + days).slice(-2);
  document.getElementById('hours').innerText = ('0' + hours).slice(-2);
  document.getElementById('minutes').innerText = ('0' + minutes).slice(-2);
  document.getElementById('seconds').innerText = ('0' + seconds).slice(-2);

  // Check if countdown has reached zero
  if (timeRemaining <= 0) {
    clearInterval(countdownTimer);
    // Display a message when countdown is over
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    alert('Countdown is over!');
  }
}, 1000);
