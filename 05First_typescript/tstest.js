"use strict";
var str = "hello, World!";
var str2;
str2 = "what";
console.log(str);
console.log(str2);
function chav() {
    var _a;
    (_a = document.getElementById("rock_av")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "chav.jpg");
    boom();
}
function unchav() {
    var _a;
    (_a = document.getElementById("rock_av")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "normal_av.jpg");
}
function boom() {
    var audio = new Audio('vine-boom.mp3');
    audio.volume = 0.05;
    audio.play();
}
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    return person;
}());
var av = new person("Av", 18);
console.log(av.name);
var num = 2;
function inc_num() {
    num++;
}
inc_num();
console.log(num);
