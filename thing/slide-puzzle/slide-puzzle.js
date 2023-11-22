let cols, rows; let zeroParity, swapParity; let moves=0; let startTime, endTime, time = null;
let troll = false;
const img = new Image();
img.src = 'https://i.imgur.com/CmFuOpx.png';
// img.src = 'images/2.jpg';
let solution;
let wide = 500;

function imgChange(imgSrc){
    img.src=imgSrc;
}


function main(){

    // document.getElementById("stats").innerHTML = "Moves: 0 <br> Time: 0 minutes, 0.0 seconds <br><br><br><br><br><br><br>askjdhaksjdh";
    const container = document.getElementById("puzzle-container");
    moves=0; startTime=null;

    cols = document.querySelector("input[name='cols']:checked").value;
    rows = document.querySelector("input[name='rows']:checked").value;    
    
    const board = generateBoard(rows, cols);
    let text = drawBoard(board);
    solution = drawBoard(solution);
    solution = solution.replace(/'/g, '\"');
    container.innerHTML = text;

    styleBoard(board);
}

function generateBoard(rows, cols){
    const board = [...Array(rows*cols).keys()];
    solution = board.map((x)=>x);

    arrayRandomise(board);

    let zeroIndex = board.indexOf(0);
    let zeroX = zeroIndex % cols;
    let zeroY = (zeroIndex - zeroX) / cols;

    let zeroDist = (cols - zeroX - 1) + (rows - zeroY - 1);
    zeroParity = (zeroDist % 2 == 1) ? 'odd' : 'even';

    let swapNum = board.length-1;
    swapParity = (swapNum % 2 == 1) ? 'odd' : 'even';

    if (troll){
        if (swapParity == zeroParity){
            let i = board.indexOf(4);
            let j = board.indexOf(7);
            let k = board[i];
            board[i] = board[j];
            board[j] = k;
        }
    }
    else{
        if (swapParity != zeroParity){
            let i = board.indexOf(4);
            let j = board.indexOf(7);
            let k = board[i];
            board[i] = board[j];
            board[j] = k;
        }
    }

    let num = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // id format: number,row,column
            solution[num] = [solution[num],r,c];
            board[num] = [board[num],r,c];
            num++;
        }
    }    

    return board;
}

function drawBoard(board){

    let text = "";
    text += "<div style='display:table; width:"+ (wide) +"px;border:10px double black;background-color:white;'>\n";

    for (let i = 0; i < board.length; i++) {
        if (i % cols == 0){
            text += "<div id='row" + (i/cols) + "' style='display:table-row;'>\n"
        }

        text += "<div id='cell" + board[i][1] + board[i][2] + "' class='tile" + board[i][0] + "' onclick='move("+ board[i][1] + "," + board[i][2] +")'>";
        // text += board[i];
        text += "</div>\n";

        if (i % cols == (cols-1) && i != 0) {
            text += "</div>\n";
        }
    }

    text += "</div>";
    return text;
}

function styleBoard(board){
    const imgRatio = img.height/img.width;

    const styling = document.getElementById("boardStyle");

    let text = "";

    for (let i = 0; i < board.length-1; i++) {
        text += ".tile" + i + ", "        
    }
    text += ".tile" + (board.length-1) + " ";
    text += "{\n"+
        "display: table-cell;\n" +
        "background: url('" + img.src + "');\n"+
        "background-size: " + wide + "px auto;\n"+
        "width: " + (wide/cols) + "px;\n" +
        "height: " + ((imgRatio*wide)/rows) + "px;\n"+
        "border: 1px solid white;\n"+
        "cursor:pointer;\n"+
        "}\n\n";

    for (let i = 0; i < board.length; i++) {
        const xPos = i % cols;
        const yPos = (i - xPos) / cols;

        text += ".tile" + i + " {"+
        "background-position: -" + (wide/cols * xPos) + "px -" + (imgRatio*wide/rows*yPos) + "px;"+
        ((i == 0)? "opacity:0%" : "") + "}\n";
    }

    styling.innerHTML = text;
}

function arrayRandomise(array){
    for (let i = array.length-1 ; i>0 ; i--){
        let j = Math.floor(Math.random()*i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
}

function move(row, col){
    if (startTime == null) {
        startTime = new Date();
    }

    let cell = document.getElementById("cell" + row + col);
    let tile = cell.className;

    if (tile != "tile0"){
        if (col < (cols-1) &&
            document.getElementById("cell" + row + (col+1)).className == "tile0")
            {
                moves++;
                swap("cell" + row + col, "cell" + row + (col+1));
                return;
        }
        if (col > 0 &&
            document.getElementById("cell" + row + (col-1)).className == "tile0"){
                moves++;
                swap("cell" + row + col, "cell" + row + (col-1))
                return;
        }
        if (row < (rows-1) &&
            document.getElementById("cell" + (row+1) + col).className == "tile0"){
                moves++;
                swap("cell" + row + col, "cell" + (row+1) + col)
                return;
        }
        if (row > 0 &&
            document.getElementById("cell" + (row-1) + col).className == "tile0"){
                moves++;
                swap("cell" + row + col, "cell" + (row-1) + col)
                return;
        }
    }
}

function swap(c1, c2){
    let temp = document.getElementById(c1).className;
    document.getElementById(c1).className = document.getElementById(c2).className;
    document.getElementById(c2).className = temp;
    checkWin();
}

function checkWin(){
    let boardState = document.getElementById("puzzle-container").innerHTML;
    if (boardState == solution){
        endTime = new Date()
        time = endTime - startTime;
        let s = ((time / 1000) % 60).toFixed(1);
        let m = Math.floor(time / 60000);
        document.getElementById("puzzle-container").innerHTML = "<img style='width:"+(wide)+"px;border:10px double black;background-color:white;' src='" + img.src + "'></div>";
        document.getElementById("stats").innerHTML = "Moves: "+ moves + " | Time: " + m + " minutes, " + s + " seconds";
    }
}

function invertTroll(){
    console.log(document.getElementById("cell11").className);
    if (troll){
        troll = false;
    }
    else{
        troll = true;
    }
}