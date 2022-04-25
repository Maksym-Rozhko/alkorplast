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
    headerFixed.classList.toggle('active-nav-height');
});

const avdantagesSlider = new Swiper('.advantages-slider.swiper-container', {
  slidesPerView: 4,

  navigation: {
    nextEl: '.advantages-next',
    prevEl: '.advantages-prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  }
});

const gallerySlider = new Swiper('.gallery-slider.swiper-container', {

  slidesPerView: 'auto',
  spaceBetween: 15,
  autoplay: true,

  pagination: {
      el: '.gallery-pagin',
      clickable: true,
  },

  breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
  }
});

const popularSlider = new Swiper('.popular-slider.swiper-container', {
  slidesPerView: 4,

  navigation: {
    nextEl: '.popular-next',
    prevEl: '.popular-prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    675: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  }
});

const partnersSlider = new Swiper('.partners-slider.swiper-container', {
autoplay: true,
loop: true,

pagination: {
  el: '.partners-pagin',
  clickable: true,
},

breakpoints: {
  300: {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
  },
  475: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1000: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1500: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1900: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
}
});

const ourCatedoriesSlider = new Swiper('.our-categories-slider.swiper-container', {
autoplay: true,

pagination: {
  el: '.our-categories-pagin',
  clickable: true,
},

breakpoints: {
  300: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  812: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}
});

const productDescriptSlider = new Swiper('.product-descript-slider.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 25,

  navigation: {
    nextEl: '.product-descript-next',
    prevEl: '.product-descript-prev',
  },
}); 

document.querySelectorAll('.survey_button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const previevDescript = document.querySelector('.slider-preview-img');
const slidesDescript = document.querySelectorAll('.product-descript__item');

slidesDescript.forEach(slide => {
  slide.addEventListener('click', () => {
    previevDescript.src = slide.children[0].getAttribute('src');
  });
});

jQuery.fn.setCursorPosition = function(pos) {
  if (jQuery(this).get(0).setSelectionRange) {
      jQuery(this).get(0).setSelectionRange(pos, pos);
  } else if (jQuery(this).get(0).createTextRange) {
    var range = jQuery(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

jQuery(function(){
  jQuery("#uForm__tel_1").mask("+38(999) 999-9999");
});

jQuery('#uForm__tel_1').click(function(){
  $(this).setCursorPosition(4); 
});

jQuery(function(){
  jQuery("#uForm__tel_2").mask("+38(999) 999-9999");
});

jQuery('#uForm__tel_2').click(function(){
  $(this).setCursorPosition(4); 
});

const formInputElems = document.querySelectorAll('.input');
const formLabelElems = document.querySelectorAll('.label');

const isFormInputsEmpty = (input) => {

  if (input.classList.contains('input-name')) {
    return 'name';
  }

  if (input.classList.contains('input-tel')) {
    return 'tel';
  }

  if (input.classList.contains('input-name2')) {
    return 'name2';
  }

  if (input.classList.contains('input-tel2')) {
    return 'tel2';
  }
};

formInputElems.forEach(input => {
  input.addEventListener('keydown', () => {
    
    if (input.value !== '' && isFormInputsEmpty(input) === 'name') {
      formLabelElems[0].classList.add('label-active');
    }
    if (input.value !== "" && isFormInputsEmpty(input) === 'tel') {
      formLabelElems[1].classList.add('label-active');
    } 
    if (input.value !== '' && isFormInputsEmpty(input) === 'name2') {
      formLabelElems[2].classList.add('label-active');
    }
    if (input.value !== '' && isFormInputsEmpty(input) === 'tel2') {
      formLabelElems[3].classList.add('label-active');
    } 
  });
});

const btnScrollUp = document.querySelector('.scroll-top');
const topElem = document.querySelector('.main'); 

btnScrollUp.addEventListener('click', () => {
  topElem.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const popUpOverflow = document.querySelector('.pop-up__overflow');
const popUpThanks = document.querySelector('.pop-up__thanks');
const btnPopUpCloseElem = document.querySelectorAll('.pop-up__close');
const orderCallElems = document.querySelectorAll('.callback-form');

const openPopUp = () => {
  popUpOverflow.classList.add('pop-up__active');
  document.addEventListener('keydown', escapeHandler);
};

const openPopUpOrder = () => {
  popUpOverflow.classList.add('pop-up__active');
  document.addEventListener('keydown', escapeHandler);
};

const showPopUpThanks = () => {
  popUpThanks.classList.add('pop-up__active');
  document.addEventListener('keydown', escapeHandler);
};

const closePopUp = () => {
  popUpOverflow.classList.remove('pop-up__active');
  popUpThanks.classList.remove('pop-up__active');
  document.removeEventListener('keydown', escapeHandler);
};

const escapeHandler = e => {
  e.code === 'Escape' ? closePopUp() : false;
}

btnPopUpCloseElem.forEach(btn => btn.addEventListener('click', () => closePopUp()));

const checkPopUpActive = (popUpElem, e) => {
  const target = e.target;
  target.classList.contains('pop-up__close') || target === popUpElem ? closePopUp() : false;
};

popUpOverflow.addEventListener('click', e => checkPopUpActive(popUpOverflow, e));
popUpThanks.addEventListener('click', e => checkPopUpActive(popUpThanks, e));

orderCallElems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    openPopUpOrder();
  });
});

const clearInputs = () => {
  const allInputs = document.querySelectorAll('input');
  allInputs.forEach(input => input.value = '');
};

const categoriesNavItem = document.querySelectorAll('.categories-nav__item');
const categoriesLinks = document.querySelectorAll('.categories-nav__link');

const removeAllListItems = (listElems) => {
  listElems.forEach(elem => {
    if (elem.classList.contains('categories-nav__item')) {
      listElems.forEach(elem => elem.classList.remove('categories-nav__item-active'));
    }
    if (elem.classList.contains('categories-nav__link')) {
      listElems.forEach(elem => elem.classList.remove('categories-nav__link-active'));
    }
  });
};

categoriesNavItem.forEach((listElem, i) => {
  listElem.addEventListener('click', () => {
    if(!listElem.classList.contains('categories-nav__item-active')) {
      removeAllListItems(categoriesNavItem);
      listElem.classList.add('categories-nav__item-active');
    }
  });
});

categoriesLinks.forEach((listElem, i) => {
  listElem.addEventListener('click', () => {
    if(!listElem.classList.contains('categories-nav__link-active')) {
      removeAllListItems(categoriesLinks);
      listElem.classList.add('categories-nav__link-active');
    }
  });
});

const formPopUp = document.getElementById('uForm_2');
const formPopUpBtn = document.querySelector('#uForm__submit_2');

function changeContainer() {
  const containerActive = document.querySelector('.pop-up__container.is-active');
  const containerInactive = document.querySelector('.pop-up__container:not(.is-active)');

  containerActive.classList.remove('is-active');
  setTimeout(() => {
    containerInactive.classList.add('is-active');
  }, 700);
};

formPopUp.addEventListener('submit', e => {
  e.preventDefault();
  changeContainer();
});


const btnSearch = document.querySelectorAll('.btn.search');
const blockSearch = document.querySelectorAll('.search-container>.search');

btnSearch.forEach(btn => {
    btn.addEventListener('click', () => {
        blockSearch.forEach(input => input.classList.toggle('active-input'));
    });
});

try {
  const takesSlides = document.querySelectorAll('.product-descript-slider .swiper-slide');
  const parentElemProductSlider = document.querySelector('.product-descript__slider');
  
  takesSlides.length <= 3 ? parentElemProductSlider.classList.add('remove-product-slider') : false;
} catch (error) {}