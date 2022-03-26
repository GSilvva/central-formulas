new Swiper(".produto__principal__images .swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    simulateTouch: false,
    navigation: {
      nextEl: ".produto__principal__images [data-next]",
      prevEl: ".produto__principal__images [data-prev]",
    },
});

const images = document.querySelectorAll(".produto__principal__images .swiper-slide");
const principalImage = document.querySelector(".produto__principal__images figure img");
images.forEach(image => {
    image.addEventListener("click", e => {
        const imgSrc = e.currentTarget.querySelector("img").src;
        principalImage.setAttribute("src", imgSrc);
    });
});