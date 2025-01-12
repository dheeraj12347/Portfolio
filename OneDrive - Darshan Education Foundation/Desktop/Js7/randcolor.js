const button = document.querySelector(".btn");
const result = document.querySelector(".code");

button.addEventListener("click", function () {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const color = `rgb(${red},${blue},${green})`; 
    document.body.style.backgroundColor = color;
    result.textContent = color;
});
