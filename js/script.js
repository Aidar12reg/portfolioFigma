


const faqLinks = document.querySelectorAll('.content-faq__link');
const linkCloseTextOfLink = document.querySelector('.close__faqText');

for (let index = 0; index < faqLinks.length; index++) {
   const faqLink = faqLinks[index];
   const textOfLink = faqLink.lastElementChild;
   console.log(textOfLink);

   faqLink.addEventListener("click", function (e) {
      faqLink.classList.add('active');
      textOfLink.classList.add('active');
      linkCloseTextOfLink.classList.add('active');
      e.preventDefault();
   })

   linkCloseTextOfLink.addEventListener("click", function (e) {
      faqLink.classList.remove('active');
      textOfLink.classList.remove('active');
      linkCloseTextOfLink.classList.remove('active');

   })

}








;

// слайдеры
const sliderProject = new Swiper('.slider-project__body', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,
   grabCursor: true,
   autoHeight: true,
   breakpoints: {
      768: {
         slidesPerView: 3,
      },
      320: {
         slidesPerView: 2.4,
      }
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});

const sliderOpinion = new Swiper('.slider-opinion__body', {
   loop: true,
   grabCursor: true,
   slidesPerView: 1,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
// слайдеры


// popups

const body = document.querySelector('body');
const popupLinks = document.querySelectorAll('.popupLink');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 400;

// ------------->>
if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });

   };
};
// --------------------------------------------------//








// кнопка закрытия (обьект с класом .close-popup) >>>>>>>>>
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
         popupClose(el.closest('.popupArticle'));
         e.preventDefault();
      });
   };
};
// кнопка закрытия-----------------------------------------------------------------------------//


// открытие попапа  >>>>>>>>>
function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popupArticle.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popupArticle__content')) {
            popupClose(e.target.closest('.popupArticle'))
         }
      });
   }
}
// открытие попапа-----------------------------------------------------------------------------//

// закрытие попапа  >>>>>>>>>
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}
// закрытие попапа-----------------------------------------------------------------------------//

// функция фикса сдвига контента после открытия попапа  >>>>>>>>>

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }

   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);

}
// функция фикса сдвига контента после открытия попапа---------------------------------------//


// функция фикса сдвига контента после закрытия попапа, убираем паддинги и снимаем с боди класс lock  >>>>>>>>>
function bodyUnLock() {
   setTimeout(function () {

      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;

   setTimeout(function () {
      unlock = true;
   }, timeout);

}
// функция фикса сдвига контента после закрытия попапа, убираем паддинги и снимаем с боди класс lock-----------------//



let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
