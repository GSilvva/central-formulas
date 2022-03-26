// VIDEO
const videoModal = document.querySelector(".sobre__video article");
const video = videoModal.querySelector("video");
const btnVideo = document.querySelector("[data-video]");
const closeModalVideo = videoModal.querySelector("button");

btnVideo.addEventListener("click", () => {
  videoModal.classList.add("open");
  document.documentElement.classList.add("o-hidden");
  video.play();
});

closeModalVideo.addEventListener("click", () => {
  videoModal.classList.remove("open");
  document.documentElement.classList.remove("o-hidden");
  video.pause();
});

new Swiper(".sobre__galeria .swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".sobre__galeria [data-next]",
      prevEl: ".sobre__galeria [data-prev]",
    },
    breakpoints: {
        300: {
            centeredSlides: true,
        },
        600: {
            centeredSlides: false,
        }
    }
});

// GALERIA
const imgs = document.querySelectorAll(".swiper-slide");
const modalFotos = document.querySelector(".modal-foto");
const imgModal = modalFotos.querySelector("img");
const closeModal = modalFotos.querySelector("button");

imgs.forEach(img => {
  img.addEventListener("click", (e) => {
    const imgTarget = e.currentTarget;
    const image = imgTarget.querySelector("img");
    const srcImage = image.getAttribute("src");
    modalFotos.classList.add("open");
    document.documentElement.classList.add("o-hidden");
    imgModal.setAttribute("src", srcImage);
  });
});

closeModal.addEventListener("click", () => {
  modalFotos.classList.remove("open");
  document.documentElement.classList.remove("o-hidden");
});