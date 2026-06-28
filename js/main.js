'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*--------------------------
        Event Slider
    ----------------------------*/
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        smartSpeed: 1200,
        autoplay: true,
        responsive: {
            992: { items: 3 },
            768: { items: 2 },
            0: { items: 1 }
        }
    });

    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        smartSpeed: 1200,
        autoplay: true,
        responsive: {
            992: { items: 4 },
            768: { items: 3 },
            576: { items: 2 },
            0: { items: 1 }
        }
    });

    /*------------------
        Magnific
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*==========================
        COUNTDOWN (130 Gün)
    ============================*/

    // Başlangıç süresi
    var days = 130;
    var hours = 9;
    var minutes = 5;
    var seconds = 20;

    // Toplam milisaniye
    var totalTime =
        (days * 24 * 60 * 60) +
        (hours * 60 * 60) +
        (minutes * 60) +
        seconds;

    // Şu an + süre
    var countdownDate = new Date().getTime() + totalTime * 1000;

    $("#countdown-time").countdown(countdownDate, function (event) {
        $(this).html(
            event.strftime(
                "<div class='countdown__item'><span>%D</span><p>Gün</p></div>" +
                "<div class='countdown__item'><span>%H</span><p>Saat</p></div>" +
                "<div class='countdown__item'><span>%M</span><p>Dakika</p></div>" +
                "<div class='countdown__item'><span>%S</span><p>Saniye</p></div>"
            )
        );
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1, #bar2, #bar3').barfiller({
        barColor: "#ffffff"
    });

    /*-------------------
        Nice Scroll
    ---------------------*/
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

})(jQuery);