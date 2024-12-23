import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';


const sectionClassName = 'hero__swiper';
const heroContainer = document.querySelector(`.${sectionClassName}`);

const initHeroSlider = () => {
  if (heroContainer) {
    return new Swiper(`[data-slider-wrapper="${sectionClassName}"]`, {
      modules: [Navigation, Pagination],
      grabCursor: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 50,

      pagination: {
        el: `[data-slider-hero-pagination="${sectionClassName}"]`,
        clickable: true,
      },
    });
  }

  return null;
};

export {initHeroSlider};
