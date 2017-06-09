		$(function() { 
			$(".navbar-toggle").on("click", function () {
    		$(this).toggleClass("active");
			});
		});

		$(function($) {
			$('.scrollable').click(function (e) {
				e.preventDefault(); 
				var target = $(this).attr('href'); 
				$('body,html').animate({
					scrollTop: $(target).offset().top, 
				}, 1000);
				$('.navbar-collapse').collapse('hide'); 
				$('.navbar-toggle').removeClass('active'); 
			});
		});

		$(function () {
  		$(document).scroll(function () {
				var $nav = $(".navbar-fixed-top");
				$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
			});
		});