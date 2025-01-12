const slideshow = document.querySelector(".slideshow");
const slideshowcount = document.querySelectorAll(".slide").length;
let count = 0;
const SlideShow = () => {
    count++;
    if(count === slideshowcount){
        count = 0;
    }
    slideshow.style.transform = `translateX(-${count * 100}%)`;
};
setInterval(SlideShow,2000);