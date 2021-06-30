let resetBtn = document.getElementById("reset");
let Buttons = document.getElementsByClassName("Button");
let result = document.getElementById("result");
let randomBtn = null;

function start() {
    let startBtn = document.getElementById("start");
    let main_div = document.getElementById("main-div");
    main_div.style.visibility = "visible";
    startBtn.style.visibility = "hidden";
}
function checkBtn(btnId) {
    randomBtn = Math.floor(Math.random() * 3 + 1);
    if(btnId == randomBtn) {
        result.textContent = "WOW! You WON!";
        result.classList.add("correct");
        result.style.visibility = "visible";
        resetBtn.style.visibility = "visible";
        disableBtn(); 
    } else {
        result.textContent = "You lose!";
        result.classList.add("wrong");
        result.style.visibility = "visible";
        resetBtn.style.visibility = "visible";
        disableBtn();
    }
}
function resetGame() {
    btnId = null;
    randomBtn = null;
    resetBtn.style.visibility = "hidden";
    result.style.visibility = "hidden";
    result.classList.remove("correct");
    for (var i = 0; i <= 2; ++i){
        Buttons[i].disabled = false;
    }
}
function disableBtn() {
    for (var i = 0; i <= 2; ++i){
        Buttons[i].disabled = true;
    }
}