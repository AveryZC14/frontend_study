var timeSelect = document.getElementById("timeSel");
timeSelect.addEventListener("change", function(){
    targetTime = new Date(timeSelect.value)
})

var targetTime = new Date(timeSelect.value).getTime();

var x = setInterval(function() {
    var currentTime = new Date().getTime();
    var diff = targetTime - currentTime;
    var days = (
        Math.abs(
            Math.floor(
                diff / (1000 * 60 * 60 * 24)
                ))).toLocaleString('en-US', {minimumIntegerDigits: 1, useGrouping:false});
    var hours = (
        Math.abs(
            Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    var minutes = (
        Math.abs(
            Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
                ))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    var seconds = (
        Math.abs(
            Math.floor(
                (diff % (1000 * 60)) / (1000)
                ))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    timer = document.getElementById("timer")
    timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (diff > (1000 * 60 * 60 * 9))
    {
        timer.style.color = "rgba(255,255,255,1)";
        timer.style.textShadow = "5px 5px rgba(255,255,255,.2)";
        return;
    };
    timer.style.color = "rgba(255,63,63,1)"; 
    timer.style.textShadow = "5px 5px rgba(255,63,63,.2)"; 
    document.body.style.backgroundColor = "rgba(31,0,0,1)"
    
},1000);