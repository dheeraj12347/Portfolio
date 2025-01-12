const result = document.querySelector(".clock");

setInterval(function(){
    let date = new Date();
    result.innerText = date.toLocaleTimeString();
},1000);