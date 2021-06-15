$(document).ready(function () {

    $('.details').hide();

    $('.title').on('click', function () {

        const details = $(this).next();

        if (details.is(':visible')) {
            details.slideUp(350)

            $(this).find('#down').fadeIn(0)
            $(this).find('#up').fadeOut(0)
        }
        else {
            details.slideDown(350)

            $(this).find('#down').fadeOut(0)
            $(this).find('#up').fadeIn(0)
        }
    })
});