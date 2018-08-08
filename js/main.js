jQuery(document).ready(function($) {
	$(".hamburger").on("click", function(){
	    $(this).toggleClass("hamburger__active");
	    $(".menu").toggleClass("menu__active");  
    });
    $(".menu").on("click","a", function () {
	   $(".hamburger").removeClass("hamburger__active");
	   $(".menu").removeClass("menu__active");  
    });	
    $(".header__menu, .scroll").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top -79}, 1500);
	});

	$('#slider').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  pauseOnHover:false,
	  arrows:false,
	  fade: true,
	  cssEase: 'linear'
	});

	
   $('.features__slider').slick({
	  dots: true,
	  infinite: true,
	  arrows:false,
	  slidesToShow: 3,
  	  slidesToScroll: 3,
	  cssEase: 'linear'
	});

    $('.team__slider').slick({
	  dots: true,
	  infinite: true,
	  arrows:false,
	  slidesToShow: 4,
  	  slidesToScroll: 4,
	  cssEase: 'linear'
	});

	
}) 


