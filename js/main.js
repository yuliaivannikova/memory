$('.gallery__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: '',
    prevArrow: '',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});


/* Табы */



$(function () {
    var tab = $('a[data-toggle="tab"]');

    tab.on('click', function () {
        event.preventDefault();
        $('.active').removeClass('active');
        $(this).toggleClass('active');
        var target = $(this).attr('href');
        $(target).toggleClass('active');
    });
});

// $(function () {
//     $("#content").selectMenu({
//         icons: {
//             button: "content-icon"
//         }
//     });


// });