// Set variables for a 9*9 minesweeper game board
const component = {

    rows : 9,
    cols : 9,
    bombs : 10,
    ingame : true,
    bombs_place : [],
    bomb : '💣',
    flag : 'f',
    flags: 0,
    colors : {1: 'red', 2: 'orange', 3: 'yellow', 4: 'green', 5: 'indigo', 6: 'blue', 7: 'purple', 8: 'grey'}
}
// Game start
function start() {
    generateBombsIndex();
    document.getElementById("frame").appendChild(createTable());
}

// Generate random index
function randomIntFromInterval(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Randomly generate bombs that lie within index 1 - 81
function generateBombsIndex() {
    let index;

    for (let i = 0; i < component.bombs; i++) {
        index = randomIntFromInterval(1, component.rows * component.cols);
        if (!component.bombs_place.includes(index)) {
            component.bombs_place.push(index);
        }
    }
}

// Generate a 9*9 table and track the id of each cell
function createTable() {
    let table, i, j, row, cell, id;
    table = document.createElement("table");

    for (i = 0; i < component.rows; i++) {
        row = document.createElement('tr');
        for (j = 0; j < component.cols; j++) {
            cell = document.createElement('td');
            id = i * j;
            cell.id = (id.toString());
            id++;
            row.appendChild(cell);
            listen(cell, id, i ,j);
        }
        table.appendChild(row);
    }
    return table;
}

// Trigger function by listening to the mouse operation
function listen(cell, id, i , j) {
    cell.addEventListener("mousedown", function(e) {
        if (e.which === 1) {
            if(!component.ingame || cell.flag) return;
            if (component.bombs_place.includes(id)) {
                cell.style.background = "red";
                cell.textContent = component.bomb;
                gameOver();
            } else {
                const bombs = calAdjBombs(i , j);
                
                cell.style.background = component.colors[bombs];
                cell.textContent = bombs;

            }
            
        }
        // 3 is flagged
        else if (e.which === 3) {
            if (component.flags < component.bombs) {
                if (!cell.flag) {
                    cell.flag = true;
                    cell.textContent = component.flag;
                }
                else {
                    cell.flag = !cell.flag;
                    cell.textContent = null;
                }
            }
            // check if the number of flags is equal to number of bombs
            if(component.flags === component.bombs) {
                checkAllFlag();
            }
        }
        
    })
}

// This gets called whenever a user clicks on a cell.
function handleCellClick(cell, i, j) {
    if (!component.ingame) {
        return;
    }

    if (cell.flag) {
        return;
    }

    cell.clicked = true;
}

// Calculate the number of bombs near the cell clicked on 
function calAdjBombs(row, col) {
    let count = 0;
    for (let i = -1; i<2; i++) {
        for (let j = -1; i<2; i++) {
            if (row + i > 0 && col + j > 0 && component.bombs_place.includes((row + i) * (col + j))) count++;
        }
    }
    return count;
}

// Check if all flags are in the right position or not
function checkAllFlag() {
    component.bombs_place.forEach(cell => {
        if(!document.getElementById(cell.toString()).flag) return;
    });
    win();
}

function gameOver() {
    component.ingame = false;
    document.getElementById("lost").style.display="block";
}

function win() {
    component.ingame = false;
    document.getElementById("win").style.display="block";
}

function reload() {
    window.location.reload();
}

window.addEventListener("load", function() {
    document.getElementById("lost").style.display="none";
    document.getElementById("win").style.display="none";
    start();
})