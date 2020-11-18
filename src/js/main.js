//SECTION HEADER
const mobBurgerBtnElement = document.querySelector('.mob-burger');
const mobMenuElement = document.querySelector('.header-menu');

mobBurgerBtnElement.addEventListener('click', (event) => {
  mobBurgerBtnElement.classList.toggle('mob-burger_active');
  mobMenuElement.classList.toggle('header-menu_mob-active');
});

//scroll nav
$('.scroll').click(function (event) {
  event.preventDefault();
  //calculate destination place
  let dest = 0;
  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
    dest = $(document).height() - $(window).height();
  } else {
    dest = $(this.hash).offset().top;
  }
  //go to destination
  $('html,body').animate({scrollTop: dest}, 500, 'swing');
});

//SECTION CASES
//if desktop in cases list insert button to show hidden elements
let showCasesButtonTrigger = 0;
let hiddenCasesIsShown = 0;
let casesSliderTrigger = 0;
let casesSlider;

const casesList = document.querySelector('.cases');
const firstHiddenCasesElement = document.querySelector('.cases-item_hidden-desktop');
const hiddenCasesElements = document.querySelectorAll('.cases-item_hidden-desktop');


function setHiddenCasesButton() {
  //check if already exists or hidden elements is already shown
  if (showCasesButtonTrigger || hiddenCasesIsShown) return;

  const showCasesButtonContElementNode = document.querySelector('.show-cases-button-cont-template').content.cloneNode(true);
  //set cloned node
  casesList.insertBefore(showCasesButtonContElementNode, firstHiddenCasesElement)

  const showCasesButtonElement = document.querySelector('.show-cases-button');

  //set event listener
  showCasesButtonElement.addEventListener('click', () => {
    hiddenCasesIsShown = 1;
    removeHiddenCasesButton()
    Array.from(hiddenCasesElements).forEach((item) => {
      item.classList.toggle('cases-item_hidden-desktop');
    });
  });

  showCasesButtonTrigger = 1;
}

function removeHiddenCasesButton() {
  if (showCasesButtonTrigger) {
    const showCasesButtonContElement = document.querySelector('.show-cases-button-cont');
    showCasesButtonContElement.remove();
    showCasesButtonTrigger = 0;
  }
}

function setCasesSlider() {
  casesSlider = tns({
    container: '.cases-slider',
    items: 1,
    nav: false,
    controls: false,
    mouseDrag: true
  });

  const casesSliderPrevButtonElement = document.querySelector('.cases-slider-nav__button_prev');
  const casesSliderNextButtonElement = document.querySelector('.cases-slider-nav__button_next');

  casesSliderPrevButtonElement.addEventListener('click', () => {
    casesSlider.goTo('prev');
  });

  casesSliderNextButtonElement.addEventListener('click', () => {
    casesSlider.goTo('next');
  });
}

function setCases() {
  if (document.body.clientWidth > 940) {
    setHiddenCasesButton();

    if (casesSliderTrigger) {
      casesSlider.destroy();
      casesSliderTrigger = 0;
    }


  } else {
    removeHiddenCasesButton();

    if (casesSliderTrigger) {
    } else {
      setCasesSlider();
      casesSliderTrigger = 1;
    }

  }
}

setCases();

//cases slider on mob
window.addEventListener('resize', () => {
  //set show hidden element button
  setCases();
  //on desktop (>940) - no slider, in mob (<940) - slider
});


//SECTION FAQ
const questionHeaderElements = document.querySelectorAll('.question__header');
Array.from(questionHeaderElements).forEach((item) => {
  const questionElement = item.closest('.question');
  const questionPlus = questionElement.querySelector('.question__plus');
  const questionText = questionElement.querySelector('.question__text');

  item.addEventListener('mouseover', () => {
    questionElement.classList.toggle('question_hover');
    questionPlus.classList.toggle('question__plus_hover');
    questionText.classList.toggle('question__text_hover');
  });

  item.addEventListener('mouseout', () => {
    questionElement.classList.toggle('question_hover');
    questionPlus.classList.toggle('question__plus_hover');
    questionText.classList.toggle('question__text_hover');
  });

  item.addEventListener('click', () => {
    questionElement.classList.toggle('question_active');
    questionElement.querySelector('.question__plus').classList.toggle('question__plus_active');
    questionElement.querySelector('.question__answer-cont').classList.toggle('question__answer-cont_active');
  });
});

//JQUERY
$(document).ready(function () {
  $("input[name='phone']").mask("+7 (999) 999-99-99");

  //POPUPS
  $(".get-popup-request").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-request",
      touch: false
    })
  });

  $(".get-popup-case01").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case01",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-case02").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case02",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-case03").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case03",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-case04").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case04",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-case05").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case05",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-case06").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-case06",
      touch: false,
      autoFocus: false
    })
  });

  $(".get-popup-policy").click(function (event) {
    event.preventDefault();
    $.fancybox.open({
      src: "#popup-policy",
      touch: false,
      autoFocus: false
    })
  });

});