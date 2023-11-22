// Change HTML content
function dayRuined() {   
    document.getElementById("innocentBystander").innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAA";
    document.getElementById("innocentBystander").style.color = "red";
}

// add HTML content
// NOTE: do not call after page load
function writeDoc(){
    document.write("you ruthless bastard");
}

// creates warning
function warn(){
    window.alert("You ruthless bastard");
}

function getRand(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomise(){
    document.getElementById("RNG").innerHTML = getRand(10, 30);
}