$(document).ready(function () {
	$('[data-toggle=tooltip]').tooltip()

	$(window).scroll(() => {
		if(window.scrollY >= 10) $('.header-nav').addClass('active')
		else $('.header-nav').removeClass('active')

		

		if(window.scrollY >= document.body.scrollHeight - 1000)
			$('.social-follow').css('display', 'none')
		else {
			if(window.scrollY >= 656) $('.social-follow').css('display', 'block')
			else $('.social-follow').css('display', 'none')
		}
	})

	$('.end-to-end-card').mouseenter(function() {
		$(this).find('.describe-container').animate({
			height: '200%'
		}, 256)
	})
	$('.end-to-end-card').mouseleave(function() {
		$(this).find('.describe-container').animate({
			height: '0%'
		}, 256)
	})
	

	try {
		AOS.init();
	} catch(err) {
		console.log(err.message);
	}
})