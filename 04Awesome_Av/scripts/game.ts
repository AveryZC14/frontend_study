"use strict";

let board_rows: number = 5;
let board_cols: number = 5;
let num_to_win: number = 4;
let cur_state:number = -1;
class board{
    private rows:number;
    private cols:number;
    private win_num:number;
    private game_board:number[][];
    public turn_o: boolean = true;


    constructor(rows,cols,win_num){
        this.rows = rows;
        this.cols = cols;
        this.win_num = win_num;
        this.game_board = [];
        console.log(this)
        for (let i = 0; i < this.rows; i++){
            this.game_board[i] = [];
            for(let j = 0; j < this.cols; j++){
                this.game_board[i][j]=0;
                console.log("ij"+i+j);
            }
        }
    }
    
    

    display_board(state:number = 0){
        let output:string = "";
        let cell_data:number;
        let display_data:string;
        if (state == 0){
            output += `<h2>${(this.turn_o ? "O":"X")}'s turn</h2>`;
        }else if(state == 1){
            output += "<h2>X wins!</h2>";
        }else if(state == 2){
            output += "<h2>O wins!</h2>";
        }else{
            output += "<h2>DRAW!</h2>";
        }
        output += "<table>";
        for (let i = 0; i < this.rows; i++){
            output += "<tr>";
            for(let j = 0; j < this.cols; j++){
                cell_data = this.game_board[i][j]
                
                switch(cell_data){
                    case(0):
                        // display_data = "<h3>_</h3>";
                        output += "<td>";
                        if (state == 0){
                        display_data = `<button class="game_button" onclick="b1.make_move(${i},${j})"></button>`;
                        }else{
                            display_data = "";
                        }
                        break;
                    case(1):
                        output += "<td class='x'>";
                        display_data = "<img class='x' src='imgs/x.png' alt='x'>";
                        break;
                    case(2):
                        output += "<td class='o'>";
                        display_data = "<img class='x' src='imgs/o.png' alt='o'>";
                        break;
                    default:
                        output += "<td>";
                        display_data = "<h3>🤓</h3>";
                        break;
                    }
                output += display_data;
                output += "</td>";
            }
            output += "</tr>";
        };
        output += "</table>";
        if (state !== 0){
            output += `<button class="reset" onclick="reset_game()">reset game!</button>`;
        }
        document.getElementById("game_div").innerHTML = output;
        console.log(output)
    }

    make_move(move_row,move_col){
        let player_num:number = 1+Number(this.turn_o);
        this.turn_o = !this.turn_o;
        this.game_board[move_row][move_col] = player_num;
        this.display_board();
        cur_state = this.check_win();
        console.log("cur_stat"+cur_state);
        if (cur_state !== 0){
            this.display_board(cur_state);
        }
    }

    check_win(){
        console.log("check win");
        let row:number;
        let col:number;
        let step:number;
        let w_num = this.win_num
        let win_bool:boolean = false;
        let draw_bool:boolean = true;
        let cur_cell:number;
        for (row = 0; row < this.rows; row++){
            for (col = 0; col < this.cols; col++){
                cur_cell = this.game_board[row][col];

                if (cur_cell === 0){
                    draw_bool = false;
                    continue
                }
                if (col + w_num <= this.cols){
                    win_bool = true;
                    for (step = 0;step < w_num;step++){
                        if (cur_cell !== this.game_board[row][col+step]){
                            win_bool = false;
                            break
                        }
                    }
                    if (win_bool){
                        return cur_cell
                    }
                }

                if (row + w_num <= this.rows){
                    win_bool = true;
                    for (step = 0;step < w_num;step++){
                        if (cur_cell !== this.game_board[row+step][col]){
                            win_bool = false;
                            break
                        }
                    }
                    if (win_bool){
                        return cur_cell
                    }
                }
                if (col + w_num <= this.cols && row+ w_num <= this.rows){
                    win_bool = true;
                    for (step = 0;step < w_num;step++){
                        if (cur_cell !== this.game_board[row+step][col+step]){
                            win_bool = false;
                            break
                        }
                    }
                    if (win_bool){
                        return cur_cell
                    }
                }
                if (col - w_num+1 >= 0 && row+ w_num <= this.rows){
                    win_bool = true;
                    for (step = 0;step < w_num;step++){
                        if (cur_cell !== this.game_board[row+step][col-step]){
                            win_bool = false;
                            break
                        }
                    }
                    if (win_bool){
                        return cur_cell
                    }
                }
            }
        }
        if (draw_bool){
            return 3
        }
        else{
            return 0
        }
    }
    
    reset_board(){
        this.constructor(this.rows,this.cols,this.win_num);
        this.turn_o = true;
    }
};

function reset_game(){
    cur_state = 0;
    b1.reset_board();
    b1.display_board(cur_state);
}

function show_menu(){

}

function hide_menu(){

}


const board2 = {
    rows:board_rows,
    display_board: function(){
        console.log(this);
        return this.rows;
    },
}
const b1:board = new board(board_rows,board_cols,num_to_win)
//console.log(b1.display_board());
console.log(board2.rows);
// document.getElementById("game_div").innerHTML = "<h1>adlsjkfhalskjdhflaksjdhf</h1>";

// document.addEventListener("load",board.display_board());