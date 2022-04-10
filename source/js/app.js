const burgerMenuElem = document.querySelector('.burger-menu');
const contactsWrapp = document.querySelector('.main-screen__contacts');
const navContainer = document.querySelector('.nav-container');
const logoElem = document.querySelector('.logo');
const headerFixed = document.querySelector('.header-mobile');
const aboveFooterBlock = document.querySelector('.above-footer');
const footerBlock = document.querySelector('.footer');
const mainContent = document.querySelector('.main');
let currentHref = window.location.href;
let currentWidth = window.innerWidth;


if (currentWidth > 812) {
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollY > 900 ? headerFixed.classList.add('header__desktop-active') : headerFixed.classList.remove('header__desktop-active');
    scrollY > 900 ? navContainer.classList.add('nav__desktop-active') : navContainer.classList.remove('nav__desktop-active'); 
});
}


if (currentHref.split('/')[3] !== '') {
  headerFixed.classList.add('header-active-stat');
  navContainer.classList.add('nav-active-stat');
} else {
  headerFixed.classList.remove('header-active-stat');
  navContainer.classList.remove('nav-active-stat');
}

if (currentHref.split('/')[3] === 'page-404') {
  aboveFooterBlock.setAttribute('hidden', 'hidden');
  footerBlock.setAttribute('hidden', 'hidden');
  mainContent.classList.add('main-height-active');
} 

burgerMenuElem.addEventListener('click', () => {
    burgerMenuElem.classList.toggle('burger-menu__active');
    contactsWrapp.classList.toggle('hidden-contacts');
    navContainer.classList.toggle('nav-container__active');
    navContainer.classList.remove('nav__desktop-active');
    logoElem.classList.toggle('logo--padding');
    navContainer.classList.toggle('nav-active-stat');
});