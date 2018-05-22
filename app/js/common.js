$(function() {
		$('.popup').magnificPopup({
        closeBtnInside: true,
        fixedContentPos: false,
        midClick: true,    
        type: 'inline',
        mainClass: 'white_popup'
    });

	$(".navigate").mPageScroll2id();
	
	$(".toggle").click(function(){
		$(this).next(".toggled").slideToggle();
	});
	if($(window).width()>769) {
	 $('.parallax').parallax();
	};
	
	$(window).resize(function(){
	  if($(window).width()>769) {
	 $('.parallax').parallax();
	};
	});


});
