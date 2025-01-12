//making of two empty arrays to store the game result and user result =>
gameSeq = [];
playerSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let status = false;
let level = 0;

let h2 = document.querySelector(".heading2");

document.addEventListener("keypress", function(){
    if(status == false){
        console.log("clicked");
        status = true;
        levelUp();
    }
});

//function for the flashing of the button => 

function btnFlash(btn) {
    btn.classList.add("flash");  //flash is added to the simon.js where the background color of button is turned "white".
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function levelUp(){ //This function updates the value of the level of the game.
    level++; 
    h2.textContent = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if(gameSeq[idx] == playerSeq[idx]){
        if(gameSeq.length == playerSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        heading2.innerText = `Game Over! Press any key to start`;
        restart(); 
    }
}

function btnPress () {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    playerSeq.push(userColor);

    checkAns(playerSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(Btn of allBtns){
    Btn.addEventListener("click", btnPress);
}

function reset() {
    starter = false;
    gameSeq = [];
    playerSeq = [];
    level = 0;
}