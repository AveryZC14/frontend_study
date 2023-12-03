"use strict";
let str:string = "hello, World!";

let str2:string;

str2 = "what";

console.log(str);
console.log(str2);

function chav(){
    document.getElementById("rock_av")?.setAttribute("src","chav.jpg");
    boom();
}

function unchav(){
    document.getElementById("rock_av")?.setAttribute("src","normal_av.jpg");
}

function boom() {
    let audio = new Audio('vine-boom.mp3');
    audio.volume = 0.05;
    audio.play();
}

class Person{
    name: string;
    age:number
    public constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

const av = new Person("Av",18);

console.log(av.name);

let num:number = 2;

function inc_num(){
    num++;
}

inc_num()

console.log(num);