let isDarkMode = true,
  toggle = document.querySelector('.toggle__input'),
  classes = ['component', 'header__title', 'header__subtitle', 'toggle__title', 'hr', 'card', 'card__count', 'overview__heading', 'overview__item', 'overview__count']

toggle.addEventListener('click', () => {

  isDarkMode = (!toggle.checked) ? true : false

  if (isDarkMode) removeLightTheme() 
    else addLightTheme()

  localStorage.setItem('isDarkMode', isDarkMode)

})

function addLightTheme() {
  classes.forEach(e => {

    document.querySelectorAll(`.${e}`).forEach(elem => {
      elem.classList.add(`${e}_light`)
    })
  })
}

function removeLightTheme() {
  classes.forEach(e => {
    document.querySelectorAll(`.${e}`).forEach(elem => {
      elem.classList.remove(`${e}_light`)
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem('isDarkMode') != null) {
    isDarkMode = localStorage.getItem('isDarkMode')
  }

  if (isDarkMode == 'false') {
    toggle.checked = true
    addLightTheme()
  }

})