(function($) {

/*IMAGESLIDER*/
	onload  = start;

	function start(){
	var i = 1;
	function Move(){
		i = (i%6)+1; // 3 is the Number of image in slider
		document.getElementById('i'+i).checked = true;
	}
	setInterval(Move, 3000); //change img in 3.5 sec
	}


})(jQuery);