$(".btn").click(function() {
	var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 100);
    });