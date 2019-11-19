$('.gallery__slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    nextArrow: '<img class="img__next" src="./img/icons/next.png" alt="">',
    prevArrow: '<img class="img__prev" src="./img/icons/prev.png" alt="">',
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



// $(function () {
//     var tab = $('a[data-toggle="tab"]');

//     tab.on('click', function () {
//         event.preventDefault();
//         $('.active').removeClass('active');
//         $(this).toggleClass('active');
//         var target = $(this).attr('href');
//         $(target).toggleClass('active');
//     });
// });

// $(function () {
//     $("#content").selectMenu({
//         icons: {
//             button: "content-icon"
//         }
//     });


// });


$('.tabs-controll a').click(function () {

    var tab_to_show = $(this).attr('data-tab');

    var tabs = $(this).parent('.tabs-controll').parent('.tabs-wrapper').children('.tab-content');

    tabs.each(function () {

        if ($(this).attr('data-tab') == tab_to_show) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }


    });

    var link = $(this).parent('.tabs-controll').parent('.tabs-wrapper').children('.tabs-controll').children('.tab-main');

    link.each(function () {
        if ($(this).attr('data-tab') == tab_to_show) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }

    });

});