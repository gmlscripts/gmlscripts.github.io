/* 
**	CONTRAST HANDLER 
*/

$(document).ready(function() {

    if (getCookie('contrast')) {
        $('#contrast').addClass('active');
        $('html').addClass('filter');
    }
		
    $('#contrast')
        .css('opacity',0.5)
        .css('cursor','pointer')
        .hover(function(){$(this).fadeTo('fast',1.0)},
               function(){$(this).fadeTo('fast',0.5)})
        .click(function() {
            if ($(this).hasClass('active')) {
                setCookie('contrast',null,0);
                $(this).removeClass('active');
                $('html').removeClass('filter');
            }else{
                setCookie('contrast',1,1);
                $(this).addClass('active');
                $('html').addClass('filter');
            }
        });
});


