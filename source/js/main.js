import {iosVhFix} from './utils/ios-vh-fix';
//import {initModals} from './modules/modals/init-modals';
//import {initCustomSelect} from './modules/form/init-custom-select';
//import {initFormValidate} from './modules/form/init-form-validate';
import {showAuthorizedMenu} from './modules/show-authorized-menu';
import {initBannerSlider} from './modules/init-banner-slider';
import {initListCardsSlider} from './modules/init-list-cards-slider';
import {initListArticlesSlider} from './modules/init-list-articles-slider';
import {initSpecialBannersSlider} from './modules/init-special-banners-slider';
import {initProductCount} from './modules/init-product-count';
import {initFavouriteClick} from './modules/init-favourite-click';
import {removeFocus} from './modules/remove-focus';
import {initCartButtonClick} from './modules/init-cart-button-click';
import {initTabs} from './modules/init-tabs';
import {initShopsMap} from './modules/init-map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    //initModals();
    //initCustomSelect();
    //initFormValidate();
    showAuthorizedMenu();
    initBannerSlider();
    initListCardsSlider();
    initListArticlesSlider();
    initProductCount();
    initFavouriteClick();
    removeFocus();
    initCartButtonClick();
    initSpecialBannersSlider();
    initTabs();
    initShopsMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
