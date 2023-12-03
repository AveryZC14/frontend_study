"use strict";
var board_rows = 5;
var board_cols = 5;
var num_to_win = 4;
var cur_state = -1;
var board = /** @class */ (function () {
    function board(rows, cols, win_num) {
        this.turn_o = true;
        this.rows = rows;
        this.cols = cols;
        this.win_num = win_num;
        this.game_board = [];
        console.log(this);
        for (var i = 0; i < this.rows; i++) {
            this.game_board[i] = [];
            for (var j = 0; j < this.cols; j++) {
                this.game_board[i][j] = 0;
                console.log("ij" + i + j);
            }
        }
    }
    board.prototype.display_board = function (state) {
        if (state === void 0) { state = 0; }
        var output = "";
        var cell_data;
        var display_data;
        if (state == 0) {
            output += "<h2>".concat((this.turn_o ? "O" : "X"), "'s turn</h2>");
        }
        else if (state == 1) {
            output += "<h2>X wins!</h2>";
        }
        else if (state == 2) {
            output += "<h2>O wins!</h2>";
        }
        else {
            output += "<h2>DRAW!</h2>";
        }
        output += "<table>";
        for (var i = 0; i < this.rows; i++) {
            output += "<tr>";
            for (var j = 0; j < this.cols; j++) {
                cell_data = this.game_board[i][j];
                switch (cell_data) {
                    case (0):
                        // display_data = "<h3>_</h3>";
                        output += "<td>";
                        if (state == 0) {
                            display_data = "<button class=\"game_button\" onclick=\"b1.make_move(".concat(i, ",").concat(j, ")\"></button>");
                        }
                        else {
                            display_data = "";
                        }
                        break;
                    case (1):
                        output += "<td class='x'>";
                        display_data = "<img class='x' src='imgs/x.png' alt='x'>";
                        break;
                    case (2):
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
        }
        ;
        output += "</table>";
        if (state !== 0) {
            output += "<button class=\"reset\" onclick=\"reset_game()\">reset game!</button>";
        }
        document.getElementById("game_div").innerHTML = output;
        console.log(output);
    };
    board.prototype.make_move = function (move_row, move_col) {
        var player_num = 1 + Number(this.turn_o);
        this.turn_o = !this.turn_o;
        this.game_board[move_row][move_col] = player_num;
        this.display_board();
        cur_state = this.check_win();
        console.log("cur_stat" + cur_state);
        if (cur_state !== 0) {
            this.display_board(cur_state);
        }
    };
    board.prototype.check_win = function () {
        console.log("check win");
        var row;
        var col;
        var step;
        var w_num = this.win_num;
        var win_bool = false;
        var draw_bool = true;
        var cur_cell;
        for (row = 0; row < this.rows; row++) {
            for (col = 0; col < this.cols; col++) {
                cur_cell = this.game_board[row][col];
                if (cur_cell === 0) {
                    draw_bool = false;
                    continue;
                }
                if (col + w_num <= this.cols) {
                    win_bool = true;
                    for (step = 0; step < w_num; step++) {
                        if (cur_cell !== this.game_board[row][col + step]) {
                            win_bool = false;
                            break;
                        }
                    }
                    if (win_bool) {
                        return cur_cell;
                    }
                }
                if (row + w_num <= this.rows) {
                    win_bool = true;
                    for (step = 0; step < w_num; step++) {
                        if (cur_cell !== this.game_board[row + step][col]) {
                            win_bool = false;
                            break;
                        }
                    }
                    if (win_bool) {
                        return cur_cell;
                    }
                }
                if (col + w_num <= this.cols && row + w_num <= this.rows) {
                    win_bool = true;
                    for (step = 0; step < w_num; step++) {
                        if (cur_cell !== this.game_board[row + step][col + step]) {
                            win_bool = false;
                            break;
                        }
                    }
                    if (win_bool) {
                        return cur_cell;
                    }
                }
                if (col - w_num + 1 >= 0 && row + w_num <= this.rows) {
                    win_bool = true;
                    for (step = 0; step < w_num; step++) {
                        if (cur_cell !== this.game_board[row + step][col - step]) {
                            win_bool = false;
                            break;
                        }
                    }
                    if (win_bool) {
                        return cur_cell;
                    }
                }
            }
        }
        if (draw_bool) {
            return 3;
        }
        else {
            return 0;
        }
    };
    board.prototype.reset_board = function () {
        this.constructor(this.rows, this.cols, this.win_num);
        this.turn_o = true;
    };
    return board;
}());
;
function reset_game() {
    cur_state = 0;
    b1.reset_board();
    b1.display_board(cur_state);
}
function show_menu() {
}
function hide_menu() {
}
var board2 = {
    rows: board_rows,
    display_board: function () {
        console.log(this);
        return this.rows;
    },
};
var b1 = new board(board_rows, board_cols, num_to_win);
//console.log(b1.display_board());
console.log(board2.rows);
