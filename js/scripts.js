$(function () {

    $(' .faq__plate').on('click', function () {
        var answer = $(this).next();

        $(' .faq__answer:visible').not(answer).slideUp(400);
        answer.slideToggle(400);
    });

});

$(function () {
    $('.faq__plate').on('click', function () {
        $(this).find(".faq__plus").toggleClass('faq__plus--active');

    });
});

$(function () {
    $('.faq__plate').on('click', function () {
        $(this).find('.faq__minus').toggleClass('faq__minus--active');

    });
});