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

    $('ul.catalog__tabs').on(
        'click',
        'li:not(.catalog__tab_active)',
        function () {
            $(this)
                .addClass('catalog__tab_active')
                .siblings()
                .removeClass('catalog__tab_active')
                .closest('div.container')
                .find('div.catalog__content')
                .removeClass('catalog__content_active')
                .eq($(this).index())
                .addClass('catalog__content_active');
        }
    );

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content')
                    .eq(i)
                    .toggleClass('catalog-item__content_active');
                $('.catalog-item__specifications')
                    .eq(i)
                    .toggleClass('catalog-item__specifications_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});
