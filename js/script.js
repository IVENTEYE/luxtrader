$(function () {
  $('.lots-slider').slick({
    infinite: true,
    prevArrow: $('.control-lots-slider__arrow-prev'),
    nextArrow: $('.control-lots-slider__arrow-next'),
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 941,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 401,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
    ]
  });
});

const menu = document.querySelector('.header-burger'),
      links = document.querySelectorAll('a[href*="#"]');

let button = document.querySelector('.list-menu__icon'),
    menuList = document.querySelector('.list-menu__items'),
    menuItems = document.querySelector('.header-items__list');

button.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuItems.classList.toggle('visible');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.list-menu__icon')) {
    let menuList = document.querySelector('.list-menu__items');
    menuList.classList.remove('active');
  }
  if (!e.target.closest('.header-burger')) {
    menuItems.classList.remove('visible');
    menu.classList.remove('active');
  }
}); 

window.addEventListener('resize', function() {
	adaptive_function();
});

function adaptiveMenu(w,h) {
	if (w < 768) {
		if (!document.querySelector('.header-items__list-region').classList.contains('done')) {
			document.querySelector('.header-items__list-region').classList.add('done');
			document.querySelector('.header-items__list').appendChild(document.querySelector('.header-items__list-region'));
		}
	} else {
		if (document.querySelector('.header-items__list-region').classList.contains('done')) {
			document.querySelector('.header-items__list-region').classList.remove('done');
			document.querySelector('.header-items__user').appendChild(document.querySelector('.header-items__list-region'));
		}
	}
}

function adaptive_function() {
	let w = window.screen.width;
	let h = window.screen.height;
	adaptiveMenu(w,h);
}

adaptive_function();

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const blockId = link.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth', 
      block: 'start'
    });
  });
}