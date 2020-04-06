//dolar symbolizuje jQuery
(function($) {

	/*LIGHTBOX*/
	var gallery_index = $('.gallery-index');
	var gallery = $('.gallery');

	var overlay = $('<div>', { id: 'overlay' });
		overlay.appendTo('body').hide();

	gallery.find('a').on('click', function(event)
	{
		var href = $(this).attr('href'),
			image = $('<img>', { src: href, alt: '' });

		overlay.html( image )
			   .show();

		event.preventDefault();
	});

	gallery_index.find('a').on('click', function(event)
	{
		var href = $(this).attr('href'),
			image = $('<img>', { src: href, alt: '' });

		overlay.html( image )
			   .show();

		event.preventDefault();
	});

	overlay.on('click', function () {
		overlay.hide();
	});

	$(document).on('keyup', function(event) {
		if ( event.which === 27 ) overlay.fadeOut('fast');
	})

	/*OZNAMY*/

	// najdeme si vsetky sekcie v oznamoch
	var aktuality = $('.aktuality');

	// skryjeme vsetky
	aktuality.hide();

	// v menu najdeme link, ktory je selected
	var selected = $('.controls').find('.selected'),
		selectedNotice;

	// vytvorim funkciu show gallery, ktora akceptuje selectnuty prvok menu na zaklade ktoreho vyberieme a zobrazime galeriu
	function showNotice( selected ) {

		// ak takyto element existuje, najdeme z jeho linku idcko elementu
		// toto idcko pouzijeme na najdeme galerie, ktoru chceme zobrazit
		if ( selected.length ) {
			var id = selected.find('a').attr('href');
			selectedNotice = $(id);
		}

		// ak tato galeria existuje bude to nasa newGallery, inak new Gallery bude prva galeria v zozname
		var newNotice = selectedNotice.length ?  selectedNotice : aktuality.eq(0);

		// vsetky galerie ktore nie su nasa nova galeria schovame
		aktuality.not( newNotice ).hide();

		// zobrazime nasu novu galeriu
		newNotice.fadeIn();
	}

	// hned ju zavolame
	showNotice( selected );

	$('.controls a').on('click', function(event) {
		var li = $(this).parent();

		li.addClass('selected')
		  .siblings().removeClass('selected');

		showNotice(li);
		event.preventDefault();
	});


})(jQuery);