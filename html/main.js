$(document).ready(function () {
    $('.app-page-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.app-page-button .btnPrev'),
        nextArrow: $('.app-page-button .btnNext')
    });
    $('.app-modal-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.app-modal-button .btnPrev'),
        nextArrow: $('.app-modal-button .btnNext')
    });
    $(".app-page-slide>div").click(function () {
        $('#myModal').modal();

    })

})