jQuery(document).ready(function () {
     
     $(".phone").mask("+380 (99) 999-99-99"); 


	$('.open-popup').click(function(e) {
		e.preventDefault();
		$('.popup-bg').fadeIn(800);
		$('html').addClass('no-scroll');
	});
	
	$('.close-popup').click(function() {
		$('.popup-bg').fadeOut(800);
		$('html').removeClass('no-scroll');
	});

	$('.menu-open').click(function () {
		$('.menu').toggleClass('show-menu')
	})


});

