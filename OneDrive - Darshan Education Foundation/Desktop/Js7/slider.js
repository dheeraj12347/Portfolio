// slideshow.js
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;  //this line of code counts the amount of the

let counter = 0;

const startSlideshow = () => {
    counter++;
    if (counter === slideCount) {
        counter = 0; // Reset counter to loop back to the first slide
    }
    slides.style.transform = `translateX(-${counter * 100}%)`;
};

// Set the slideshow to change every 3 seconds
setInterval(startSlideshow, 3000);
