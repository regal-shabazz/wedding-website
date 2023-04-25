



  




const openMobileNav = document.getElementById('open-menu-icon')
const closeMobileNav = document.getElementById('close-menu-icon')
const mobileNav = document.querySelector('nav')
const menuItems = document.querySelectorAll('.menuItem')

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

menuItems.forEach(menu => {
  menu.addEventListener("click", () => {
    mobileNav.classList.remove('nav-open')
    closeMobileNav.classList.remove('display')
    openMobileNav.classList.remove('no-display')
  })
})

// Set the date to countdown to (YYYY-MM-DD)
const countdownDate = new Date('2023-05-23').getTime();

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


// rsvp

const acceptInvite = document.getElementById('yes')
const rsvpForm = document.querySelector('.seat-reservation')
const attQuery = document.querySelector('.attendance-query')

acceptInvite.addEventListener("click", () => {
  rsvpForm.classList.toggle('pop-out');
  attQuery.classList.toggle('n-display')
})

const declineInvite = document.getElementById('no')
const declineMessage = document.querySelector('.decline-message')

declineInvite.addEventListener("click", () => {
  declineMessage.classList.toggle('show')
  attQuery.classList.toggle('n-display')

  const closeDeclineMessage = document.getElementById('close-decline')

  closeDeclineMessage.addEventListener("click", () => {
    declineMessage.classList.remove('show')
    attQuery.classList.remove('n-display')
  })
})

// Get DOM elements
const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const sideOfFamily = document.getElementById('sideOfFamily')
const getASeat = document.getElementById('seat-form')

// Add event listener to the form element
getASeat.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Check if first name, last name, and side of family are filled
  if (firstName.value.trim() === "" || lastName.value.trim() === "" || sideOfFamily.value.trim() === "") {
    // Display an alert if any of the input fields are not filled
    alert('Please fill in all the required fields');
    return;
  }


  // Generate QR code URL with data from input fields
  const qrData = encodeURIComponent(`Name: ${firstName.value} ${lastName.value}\nSide of Family: ${sideOfFamily.value}`);

  qrImage.src = ""
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrData;

  const accessCard = document.querySelector('.access-card');

  accessCard.classList.toggle('generated');


  if (accessCard.classList.contains('generated')) {
    rsvpForm.classList.remove('pop-out')


    // Create and append new thankYouMessage and note elements
    const thankYouMessage = document.createElement('p');
    const note = document.createElement('p');


    thankYouMessage.innerText = `Thank you ${firstName.value} ${lastName.value}, for accepting the RSVP invitation.\n\nPlease take a screenshot of this QR code and present it at the venue entrance for entry.`;

    note.innerText = `Note: Due to poor internet connection, your QR code may take a moment to load. Please refresh the page or wait a moment for it to display.`

    const closeImgBox = document.createElement('button')
    closeImgBox.innerText = "Close"

    accessCard.appendChild(thankYouMessage);
    accessCard.appendChild(note);
    accessCard.appendChild(closeImgBox);


    closeImgBox.addEventListener("click", () => {
      accessCard.classList.remove('generated')
      attQuery.classList.remove('n-display')
      window.location.reload()

    })
  }

});
