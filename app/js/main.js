"use strict";
$(function() {
	$('.header__btn').on('click', () => {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', () => {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.header__btn-menu').on('click', () => {
		$('.menu').toggleClass('menu--open');
	});

	if($(window).width() < 651) {
		$('.work-path__item--measuring').appendTo($('.work-path__items-box'));
	}

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});
	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8
				}
			},
			{
				breakpoint: 1511,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 841,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 476,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.article-slider__box').slick({
		prevArrow: '<button class="slick-prev article-slider__arrow article-slider__arrow--right" type="button"><img src="images/arrow-slide-left.svg" alt="SEO"></button>',
		nextArrow: '<button class="slick-next article-slider__arrow article-slider__arrow--left" type="button"><img src="images/arrow-slide-right.svg" alt="SEO"></button>'
	});

	if($('*').is('.gallery__inner')) {
		mixitup('.gallery__inner', {
			load: {
				filter: '.living'
			}
		});
	}
})