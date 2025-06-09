let menuMobileBtn = document.querySelector('#menu-mobile__btn')
let line1 = document.querySelector('.menu-mobile__line1')
let line2 = document.querySelector('.menu-mobile__line2')
let menuMobile = document.querySelector('#menu__mobile')

let body = document.querySelector('body')

menuMobileBtn.addEventListener('click', () => {
  line1.classList.toggle('--ativo1')
  line2.classList.toggle('--ativo2')
  menuMobile.classList.toggle('abrir')

  body.classList.toggle('no-overflow')
})