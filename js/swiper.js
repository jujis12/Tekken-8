var mySwiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var mySwiper2 = new Swiper(".mySwiper2", {
    loop: true,
    thumbs: {
        swiper: mySwiper,
    },
});

var mySwiper = new Swiper(".mySwiper", {
    breakpoints: {
        300: {
            slidesPerView: 2,
            loop: true,
        },
        600: {
            slidesPerView: 2,
            loop: true,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
