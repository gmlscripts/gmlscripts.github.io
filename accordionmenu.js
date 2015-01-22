/* 
**	ACCORDION MENU HANDLER 
*/

$(document).ready(function() {

	var accordion_active = getCookie('accordion');


	// Store variables
	
	var accordion_head = $('.accordion > li > a'),
		accordion_body = $('.accordion li > .sub-menu');

		
	accordion_head.on('click', function(event) {

		// Disable header links
		
		event.preventDefault();

		// Show and hide the tabs on click

		if ($(this).attr('class') != 'active'){
			accordion_active = $(this).parent().attr('id');
			setCookie('accordion',accordion_active,1);
			accordion_body.slideUp('normal');
			$(this).next().stop(true,true).slideToggle('normal');
			accordion_head.removeClass('active');
			$(this).addClass('active');
		}else{
			setCookie('accordion',null,0);
			accordion_head.removeClass('active');
			$(this).next().stop(true,true).slideToggle('normal');
		}
	});

});


