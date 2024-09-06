$(document).ready(function () {
    $('.carousel__inner').slick({
        prevArrow:
            '<button type="button" class="slick-prev"><img src="../ico/left.svg"/></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="../ico/right.svg"/></button>',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});
