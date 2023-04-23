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

