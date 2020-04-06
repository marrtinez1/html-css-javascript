
//izolovanie dolara pre jQuery...aby dolaz symbolizoval jQuery, ak by sa pridali ine kniznice
//tiez na izolovanie nazvu premennych
(function($) {
	/*O NAS*/
	var about = $('.about-wrapper');
	//about.find('p').hide();

	about.find('i').on('click', function () {
		$(this).prev().toggle(300);
	});


	/*DROPDOWN*/
	$('.navigation li').on('click', function () {
		$(this).find('ul').slideToggle();
	});
})(jQuery);