var gameArea = document.getElementById('gameArea');
let moving = false;
let turn = 'white';
const save = {
    lastSelected: {cell: null, colour: null},
    highlighted:[]
};
const pieces = {
    black: {
        king: {position: '04', icon: 'black-king'},
        queen: {position: '03', icon: 'black-queen'},
        bishop1: {position: '02', icon: 'black-bishop'},
        bishop2: {position: '05', icon: 'black-bishop'},
        knight1: {position: '01', icon: 'black-knight'},
        knight2: {position: '06', icon: 'black-knight'},
        rook1: {position: '00', icon: 'black-rook'},
        rook2: {position: '07', icon: 'black-rook'},
        pawn1: {position: '10', icon: 'black-pawn'},
        pawn2: {position: '11', icon: 'black-pawn'},
        pawn3: {position: '12', icon: 'black-pawn'},
        pawn4: {position: '13', icon: 'black-pawn'},
        pawn5: {position: '14', icon: 'black-pawn'},
        pawn6: {position: '15', icon: 'black-pawn'},
        pawn7: {position: '16', icon: 'black-pawn'},
        pawn8: {position: '17', icon: 'black-pawn'}
    },
    white: {
        king: {position: '74', icon: 'white-king'},
        queen: {position: '73', icon: 'white-queen'},
        bishop1: {position: '72', icon: 'white-bishop'},
        bishop2: {position: '75', icon: 'white-bishop'},
        knight1: {position: '71', icon: 'white-knight'},
        knight2: {position: '76', icon: 'white-knight'},
        rook1: {position: '70', icon: 'white-rook'},
        rook2: {position: '77', icon: 'white-rook'},
        pawn1: {position: '60', icon: 'white-pawn'},
        pawn2: {position: '61', icon: 'white-pawn'},
        pawn3: {position: '62', icon: 'white-pawn'},
        pawn4: {position: '63', icon: 'white-pawn'},
        pawn5: {position: '64', icon: 'white-pawn'},
        pawn6: {position: '65', icon: 'white-pawn'},
        pawn7: {position: '66', icon: 'white-pawn'},
        pawn8: {position: '67', icon: 'white-pawn'}
    }
}

function makeBoard() {
    for (let i = 0; i < 8; i++) {
        let row = document.createElement('DIV');
        let direct = (i % 2 === 0)
        
        row.className = 'row';
                
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement('DIV');
            
            cell.className = 'cell';
            cell.id = 'cell' + i + j;

            cell.addEventListener('click', function(e){
                let id = this.id;
                const cell = document.getElementById(id);
                const lastCell = save.lastSelected.cell;

                if (lastCell) {
                    if (moving && cell.classList[1] === 'highlighted') movePiece(cell, save.lastSelected.cell)


                    lastCell.style.backgroundColor = save.lastSelected.colour;
                    for (let k = 0; k < save.highlighted.length; k++) {
                        save.highlighted[k].cell.style.backgroundColor=save.highlighted[k].bgColour
                        save.highlighted[k].cell.className = 'cell';
                    }
                    save.highlighted=[];
                } 
                save.lastSelected = {cell: cell, colour: cell.style.backgroundColor};
                
                
                if (moving) {moving = false; return}
                if (cell.children.length<1) return //|| cell.children[0].id.slice(0,5) !== 'white') return;
                cell.style.backgroundColor = 'orange';
                findMoves(cell);

                

            });

            if (direct === true) cell.style.backgroundColor = j % 2 === 0 ? '#fff' : '#555';
            if (direct === false) cell.style.backgroundColor = j % 2 === 1 ? '#fff' : '#555';
            
            
            row.appendChild(cell);
        }


        gameArea.appendChild(row);
    }
}

function findMoves(cell){
    const piece = {
        position: [cell.id[4], cell.id[5]],
        colour: cell.children[0].id.slice(0,5),
        type: cell.children[0].id.slice(6)

    }

    switch (piece.type) {
        case 'pawnT':
            movePawn(piece, false);
            break;
        case 'pawnF':
            movePawn(piece, true);
    
        default:
            break;
    }

}
function checkCell(cell){
    if (!cell) return false;
    save.highlighted.push({cell: cell, bgColour: cell.style.backgroundColor});
    return true;


}

function movePiece(destination, initial){
    piece = initial.children[0];
    initial.removeChild(piece)

    if (destination.children.length>0) {
        const takenPiece = destination.children[0];
        takenPiece.style.height='100px'
        takenPiece.style.width='100px'
        document.getElementById(takenPiece.id.slice(0,5) + 'Lost').appendChild(takenPiece)
    }
    if (piece.id.slice(6) === 'pawnT') piece.id = piece.id.slice(0,5) + '-pawnF' 
    destination.appendChild(piece)
}


function movePawn(piece, moved){
    const moveParity =  (piece.colour === 'white') ? 1 : -1;
    let targetCell;
    let canMove = false;

    // left and forward
    targetCell = document.getElementById('cell' + (piece.position[0] - (1*moveParity)) + (piece.position[1] - 1));
    if (checkCell(targetCell) &&
            targetCell.children.length>0 &&
            targetCell.children[0].id.slice(0,5) !== piece.colour){
        targetCell.style.backgroundColor = (targetCell.style.backgroundColor === 'rgb(255, 255, 255)') ? '#c66' : '#c66';
        targetCell.classList.add('highlighted')
    }
    
    // right and forward
    targetCell = document.getElementById('cell' + (piece.position[0] - (1*moveParity)) + (piece.position[1] - -1));
    if (checkCell(targetCell) &&
            targetCell.children.length>0 &&
            targetCell.children[0].id.slice(0,5) !== piece.colour){
        targetCell.style.backgroundColor = (targetCell.style.backgroundColor === 'rgb(255, 255, 255)') ? '#c66' : '#c66';
        targetCell.classList.add('highlighted')
    }
    
    // forward 1
    targetCell = document.getElementById('cell' + (piece.position[0] - (1*moveParity)) + (piece.position[1]));
    if (checkCell(targetCell) && targetCell.children.length<1){
        targetCell.style.backgroundColor = (targetCell.style.backgroundColor === 'rgb(255, 255, 255)') ? '#ddd' : '#aaa';
        targetCell.classList.add('highlighted')
        canMove = true
    }

    moving = true;

    // forward 2
    if (moved || !canMove) return
    targetCell = document.getElementById('cell' + (piece.position[0] - (2*moveParity)) + (piece.position[1]));
    if (checkCell(targetCell) && targetCell.children.length<1){
        targetCell.style.backgroundColor = (targetCell.style.backgroundColor === 'rgb(255, 255, 255)') ? '#ddd' : '#aaa';
        targetCell.classList.add('highlighted')
    }


}

function populateBoard(player){
    for (const key in player) {
        if (Object.hasOwnProperty.call(player, key)) {
            const piece = player[key];
            const posCell = document.getElementById('cell' + piece.position);
            let cell = document.createElement('IMG');


            // cell.src = 'piece-images/' + piece.icon + '.png';
            cell.src = 'piece-images/' + piece.icon + '.jpg';
            cell.alt = piece.icon;
            cell.id = (piece.icon.slice(6) === 'pawn') ? piece.icon + 'T' : piece.icon;
            
            cell.style.height = '80%';
            cell.style.width = '80%';
            
            
            posCell.appendChild(cell);
        }
    }
}

makeBoard();
populateBoard(pieces.white);
populateBoard(pieces.black);