function chav(){
    document.getElementById("rock_av")?.setAttribute("src","imgs/chav.jpg");
    document.getElementById("rock_av")?.setAttribute("alt","rock faced av");
    boom();
}

function unchav(){
    document.getElementById("rock_av")?.setAttribute("src","imgs/normal_av.jpg");
    document.getElementById("rock_av")?.setAttribute("alt","normal Avery");
}

function boom(){
    let audio = new Audio('media/vine-boom.mp3');
    audio.volume = 0.05;
    audio.play();
}