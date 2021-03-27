const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};
searchBtn.addEventListener("click", expand);

$(function(){

  $('.slider__university').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
  });

  $('.slider__laboratorya').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
  });

   $('.news__slider').slick({
    dots: true,
    arrows: true,
  });

  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

  const hideBtn = document.querySelector('.hide-btn');
  const showBtn = document.querySelector('.show-btn');
  const showDiploma = document.querySelector('.show-diploma');
  const hideDiploma = document.querySelector('.hide-diploma');

  $('.show-btn').on('click', function () {
    $('.structure__teacher-hidden').addClass('active');

      showBtn.style.display = 'none',
      hideBtn.style.display = 'block'
  });

   $('.hide-btn').on('click', function () {
    $('.structure__teacher-hidden').removeClass('active');

      showBtn.style.display = 'block',
      hideBtn.style.display = 'none'
  });

  $('.show-diploma').on('click', function () {
    $('.diplomas-hidden').addClass('active');

      showDiploma.style.display = 'none',
      hideDiploma.style.display = 'block'
  });

   $('.hide-diploma').on('click', function () {
    $('.diplomas-hidden').removeClass('active');

      showDiploma.style.display = 'block',
      hideDiploma.style.display = 'none'
  });

   
  $('.show-btn').on('click', function () {
    $('.sub__menu-wrap-hide').addClass('active');

      showBtn.style.display = 'none',
      hideBtn.style.display = 'block'
  });

  $('.hide-btn').on('click', function () {
    $('.sub__menu-wrap-hide').removeClass('active');

    showBtn.style.display = 'block',
    hideBtn.style.display = 'none'
  });
  
});

const scienseBtns = document.querySelectorAll('.sciense__btn');
const subMenu = document.querySelectorAll('.sub__menu');
const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < scienseBtns.length; i++) {

  const changeClass = el => {
    for (let k = 0; k < scienseBtns[i].children.length; k++){
      scienseBtns[i].children[k].classList.toggle('active')
    }
  };

  scienseBtns[i].addEventListener('click', function (e) {
    let subMenu = this.nextElementSibling;
    let currBtns = e.target;

    subMenu.classList.toggle("active");

    changeClass(e.target)
  });
};
  
  
