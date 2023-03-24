// Set variables for a 9*9 minesweeper game board
const component = {

    rows : 9,
    cols : 9,
    bombs : 10,
    ingame : true,
    bombs_place : [],
    flags: 0,
    colors : {1: 'red', 2: 'orange', 3: 'yellow', 4: 'green', 5: 'indigo', 6: 'blue', 7: 'purple', 8: 'grey'}
}

// Game start
function start() {
    genarateBombsIndex();
    document.getElementById("frame").appendChild(createTable());
}

// Generate random index
function randomIntFromInterval(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Randomly generate bombs that lie within index 1 - 81
function genarateBombsIndex() {
    let i = 0;
    let index;

    for (i; i < component.bombs; i++) {
        while (1) {
            index = randomIntFromInterval(1, component.rows * component.cols);
            if (!bombs_place.include(index)) {
                booms_place.push(index);
            }
        }
    }
}

// Generate a 9*9 table and track the id of each cell
function createTable() {
    let i, j, row, cell, id;
    const table = getElementById("table");
    table.innerHTML = "";
    for (i = 1; i < component.rows+1; i++) {
        row = document.createElement('tr');
        for (j = 1; i < component.cols+1; i++) {
            cell = document.createElement('td');
            id = i * j;
            cell.id = (id.toString());
            listen(cell, id, i ,j);
            id++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Trigger fucntion by listening to the mouse operation
function listen(cell, id, i , j) {
    cell.addEventListener("mousedown", function(e) {
        if (e.which === 1) {
            if(!component.ingame || cell.flag) return;
            if (booms_place.include(id)) {
                //do something to the cell
                gameOver();
            } else {
                const bombs = calAdjBombs(i , j);
                //do somthing to the cell
            }
            
        }
        // 3 is flagged
        else if (e.which === 3) {
            if (component.flags < component.bombs) {
                if (!cell.flag) cell.flag = true;
                else cell.flag = !cell.flag;
            }
            // check if the number of flags is equal to number of bombs
            if(component.flags++ === component.bombs) {
                checkAllFlag();
            }
        }
        
    })
}

// Calculate the number of bombs near the cell clicked on 
function calAdjBombs(row, col) {
    let count = 0;
    for (i = -1; i<2; i++) {
        for (j = -1; i<2; i++) {
            if (row + i > 0 && col + j > 0 && component.bombs_place.includes((rows + i) * (cols + j))) count++;
        }
    }
    return count;
}

// Check if all flags are in the right position or not
function checkAllFlag() {
    booms_place.array.forEach(cell => {
        if(!getElementById(cell.toString).flag) return;
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

window.addEventListener("onload", function() {
    document.getElementById("lost").style.display="none";
    document.getElementById("win").style.display="none";
    startGame();
})