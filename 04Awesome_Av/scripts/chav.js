function chav() {
    var _a, _b;
    (_a = document.getElementById("rock_av")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "imgs/chav.jpg");
    (_b = document.getElementById("rock_av")) === null || _b === void 0 ? void 0 : _b.setAttribute("alt", "rock faced av");
    boom();
}
function unchav() {
    var _a, _b;
    (_a = document.getElementById("rock_av")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "imgs/normal_av.jpg");
    (_b = document.getElementById("rock_av")) === null || _b === void 0 ? void 0 : _b.setAttribute("alt", "normal Avery");
}
function boom() {
    var audio = new Audio('media/vine-boom.mp3');
    audio.volume = 0.05;
    audio.play();
}
