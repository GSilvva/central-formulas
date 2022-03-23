new Swiper(".home__banner .swiper", {
  loop: true,
  navigation: {
    nextEl: ".home__banner__controls [data-next]",
    prevEl: ".home__banner__controls [data-prev]",
  },
  pagination: {
    el: ".home__banner__controls section",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

new Swiper(".produtos-carrossel--top .swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".produtos-carrossel--top [data-next]",
    prevEl: ".produtos-carrossel--top [data-prev]",
  },
  breakpoints: {
    300: {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 16
    },
    600: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

new Swiper(".produtos-carrossel--promocoes .swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".produtos-carrossel--promocoes [data-next]",
    prevEl: ".produtos-carrossel--promocoes [data-prev]",
  },
  breakpoints: {
    300: {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 16
    },
    600: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

new Swiper(".home__categorias .swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".home__categorias [data-next]",
    prevEl: ".home__categorias [data-prev]",
  },
});

new Swiper(".home__comentarios .swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".home__comentarios [data-next]",
    prevEl: ".home__comentarios [data-prev]",
  },
  breakpoints: {
    300: {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 16
    },
    600: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
