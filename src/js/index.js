import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 24,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

//import mobileNav from './modules/mobile-nav.js';
//mobileNav();

import tagline from './modules/tagline.js';
tagline();

import timer from './modules/timer.js';
timer();