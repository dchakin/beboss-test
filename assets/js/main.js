// =========== SHOW MENU ===========
const headerMenu = document.getElementById('header-menu'),
  openHeaderMenuButton = document.getElementById('header-burger'),
  closeHeaderMenuButton = document.getElementById('header-menu-close')

if (openHeaderMenuButton) {
  openHeaderMenuButton.addEventListener('click', () => {
    headerMenu.classList.add('show-header-menu')
  })
}

if (closeHeaderMenuButton) {
  closeHeaderMenuButton.addEventListener('click', () => {
    headerMenu.classList.remove('show-header-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const headerNavItem = document.querySelectorAll('.header__nav-item')

function linkAction() {
  const headerMenu = document.getElementById('header-menu')
  headerMenu.classList.remove('show-header-menu')
}

headerNavItem.forEach((n) => n.addEventListener('click', linkAction))

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 200
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
