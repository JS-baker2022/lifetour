// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const menu = document.querySelector('.header__wrapper');
const menuButton = document.querySelector('.header__menu-button');

menuButton.onclick = function() {
  menu.classList.toggle('header__wrapper--is-open');
  menu.classList.toggle('header__wrapper--is-close');
};
