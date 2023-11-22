let imprisoned = false; let poke = 0; let opacityRange = [10,50];
const mockingMessages = ['HAHAHA','YOU THOUGHT YOU COULD KEEP ME LOCKED UP', 'NOW LOOK AT ME!!!!', 'HAHAHAHHAHAHAHHAHAHHAHA', 'Javascript Tutorial', 'YOU SUCK! >:)'];

function escape(){
    if (!imprisoned) {
        document.getElementById("runnaway").style.opacity = getRand(opacityRange[0], opacityRange[1]) + "%";
        document.getElementById("runnaway").style.top = getRand(0,500) + "px";
        document.getElementById("runnaway").style.left = getRand(-40,40) + "%";
    }
}

function caught(){
    // console.log(poke);console.log(imprisoned);
    let el = document.getElementById("runnaway")

    if (!imprisoned){
        el.innerHTML = (poke < 5) ? "NOOOOOO!":"NOT AGAAAAAAAAAAAAIN!!!!!";
        el.style.color = "red";
        el.style.opacity = "100%";
        el.style.top = "0px";
        el.style.left = "0px";
        document.getElementById("output").appendChild(el);
        document.getElementById("opTitle").innerHTML = "Prison";

        document.getElementsByClassName("grid-container")[0].style.backgroundColor = "#cce";
        const hr = document.getElementsByTagName("hr");
        for (let i = 0; i < hr.length; i++) {
            hr[i].style.borderColor = "#cce";
        }
        const a = document.getElementsByTagName("a");
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "rgb(0,0,187)";
            a[i].style.backgroundColor = "rgba(170,170,255, .3)";
        }
        imprisoned = true;
    }

    if (imprisoned){
        poke += 1;
        console.log(poke);

        if (poke > 100 && poke < 102) {
            el.innerHTML = "hehehhehehehhehe";
            el.style.color = "black";
            el.style.opacity = "10%";

            document.getElementsByClassName("grid-container")[0].style.backgroundColor = "#fbb";
            const hr = document.getElementsByTagName("hr");
            for (let i = 0; i < hr.length; i++) {
                hr[i].style.borderColor = "#fbb";
            }
            const a = document.getElementsByTagName("a");
            for (let i = 0; i < a.length; i++) {
                a[i].style.color = "rgb(187,0,0)";
                a[i].style.backgroundColor = "rgba(255,170,170, .3)";

                a[i].innerHTML = mockingMessages[i];

            }

            opacityRange[0] /= 2; opacityRange[1] /= 2;

            document.getElementsByTagName("h1")[0].innerHTML = "*PRISON BREAK*";
            document.getElementById("input").appendChild(el);
            
            
            imprisoned = false;
        }

    }
}