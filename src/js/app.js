(function() {
	$(document).ready(() => {
		const container = $('body');
		const nav = ['about', 'services', 'team', 'works', 'contact'];
		var navTop = [];
		nav.forEach((el) => {
			let e = document.getElementById(el);
			const m = e.getBoundingClientRect();
			navTop.push(m.top);
		});
		var scroll = 0;
		$('.navbar ul li a').click((evt) => {
			var link = $(evt.currentTarget);
			$('.navbar ul li a.active').removeClass('active');
			link.addClass('active');
			var elm = document.getElementById(link.data('to'));
			var move = elm.getBoundingClientRect();
			scroll = container.scrollTop() + move.top;
			container.animate({
				scrollTop: scroll
			}, 500);
		});
		$('#know').click(() => {
			const elm = document.getElementById('services');
			const move = elm.getBoundingClientRect();
			container.animate({
				scrollTop: move.top
			}, 500);
		});
		$(window).scroll(() => {
			var active = '';
			navTop.forEach((el, index) => {
				if (index === navTop.length - 1) {
					if ($(window).scrollTop() >= navTop[index]) {
						active = nav[index];
					}
				} else {
					if ($(window).scrollTop() >= navTop[index] && $(window).scrollTop() < navTop[index + 1]) {
						active = nav[index];
					}
				}
			});
			$('.navbar ul li a.active').removeClass('active');
			$('ul').find('[data-to="' + active + '"]').addClass('active');
		});
	});
})();