$(document).ready(function () {
  $(".carousel__inner").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="ico/left.svg"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="ico/right.svg"/></button>',
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

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__specifications")
          .eq(i)
          .toggleClass("catalog-item__specifications_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  // Modal
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn();
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut();
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn();
    });
  });

  $("#consultation-form").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Пожалуйста, введите своё имя",
      phone: "Нам необходим Ваш телефон чтобы связаться с Вами",
      email: {
        required: "Нам необходим Ваш e-mail чтобы связаться с Вами",
        email: "Ваш e-mail должен быть введён в формате name@domain.com",
      },
    },
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Нам необходим Ваш телефон чтобы связаться с Вами",
        email: {
          required: "Нам необходим Ваш e-mail чтобы связаться с Вами",
          email: "Ваш e-mail должен быть введён в формате name@domain.com",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });
});
