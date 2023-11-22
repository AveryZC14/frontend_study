const canvas = document.getElementById('drawZone')
const context = canvas.getContext('2d');
const intervals = [];

//generalise updating frames: update all connections in the same timestep


context.lineWidth = "1"

function drawLines(){
    for (let x = 0; x < canvas.width; x+=10) {
    for (let y = 0; y < canvas.height; y+=10) {
    
        context.beginPath()

        context.strokeStyle = "rgb(" + x*255/canvas.width + "," + y*255/canvas.height + "," + 0 + ")"
    
    
        let factorX = Math.sign(x-canvas.width)
        let factorY = Math.sign(y-canvas.height)
    
        context.moveTo(x, y)
        context.lineTo(canvas.width/2, canvas.height/2)
    
        context.stroke()
    
    }    
    }
}


function makeShape(sides=4, dilations=[10,10], connect=false, dots=false, clear=true){
    if (clear) clearCanvas()
    let points = []
    context.strokeStyle = "black"
    
    for (let i = 0; i < sides; i++) {
        points.push(i* 2*Math.PI /sides)        
    }

    if (connect) connectPointsArray(points, dilations)
    if (dots) makeDots(points, dilations)
    return points
}
function makeSpin(points, dilations=[10,10], speed=1, connect="array", dots=true){
    let a = setInterval(() => {
        context.clearRect(0,0,canvas.width,canvas.height)

        spinPoints(points,speed)        
        if (connect==="array") connectPointsArray(points, dilations)
        else if (connect==="2array") connectArrays(points, dilations)
        if (dots) makeDots(points, dilations)
    }, 1);

    intervals.push(a)

}
function spinPoints(points,speed) {
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        point += .01 * speed
        if (point > 2*Math.PI){
            point -= 2*Math.PI
        }

        points[i] = point
        
    }
}
function connectPointsArray(points, dilations) {
    for (let i = 0; i < points.length; i++) {
        const point = point2Coords(points[i],dilations);
        let nextPoint;
        if (i !== points.length - 1){   
            nextPoint = point2Coords(points[i+1], dilations);
        }
        else{
            nextPoint = point2Coords(points[0],dilations);
        }


        
        context.beginPath()
        context.moveTo(point.x,point.y)
        context.lineTo(nextPoint.x,nextPoint.y)
        context.stroke()
    }
}
function makeDots(points, dilations){
    for (let i = 0; i < points.length; i++) {
        const point = point2Coords(points[i], dilations);
        context.fillRect(point.x-1, point.y-1, 3,3)
    }
}

function point2Coords(point, dilations){
    let pointX = (dilations[0]*10*Math.cos(point)+(canvas.width/2))
    let pointY = (dilations[1]*10*Math.sin(point)+(canvas.height/2))

    return {x: pointX, y: pointY}
}





function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    intervals.forEach(element => {
        clearInterval(element)
    });

}

