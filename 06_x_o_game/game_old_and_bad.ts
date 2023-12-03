"use strict";
{{
let board_rows: number = 3;
let board_cols: number = 3;
let num_to_win: number = 3;

const board = {
    rows : board_rows,
    cols : board_cols,
    win_num : num_to_win,
    game_board : (function() {
        // debugger;
        let result: number[][] = [];
        console.log(this)
        for (let i = 0; i < board_rows; i++){
            result[i] = [];
            for(let j = 0; j < board_cols; j++){
                result[i][j]=0;
                console.log("ij"+i+j);
            }
        }

        console.log("result size"+ result.length +"result"+result.toString());
        return result;
    })(),
    

    display_board : function(){
        let output:string = "";
        let cell_data:number;
        let display_data:string;
        output += "<table>";
        for (let i = 0; i < this.rows; i++){
            output += "<tr>";
            for(let j = 0; j < this.rows; j++){
                cell_data = (this.game_board[i])
                output += "<td>";
                switch(cell_data){
                    case(0):
                        display_data = "<h3>_</h3>";
                        break;
                    case(1):
                        display_data = "<h3>X</h3>";
                        break;
                    case(2):
                        display_data = "<h3>O</h3>";
                        break;
                    default:
                        display_data = "<h3>🤓</h3>";
                        break;
                    }
                output += display_data;
                output += "</td>";
            }
            output += "</tr>";
        };
        output += "</table>";
        document.getElementById("game_div").innerHTML = output;
        console.log(output)
    }
    
};

const board2 = {
    rows:board_rows,
    display_board: function(){
        console.log(this);
        return this.rows;
    },
}

console.log(board2.display_board());
console.log(board2.rows);
document.getElementById("game_div").innerHTML = "<h1>adlsjkfhalskjdhflaksjdhf</h1>";

// document.addEventListener("load",board.display_board());
}}