// Global variables
let grid, cols, rows;
let scale = 10;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function countNeighbours(grid, x, y) {
    let sum = 0;
    for (i = -1; i < 2; i++) {
        for (j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y]
    return sum;
}

function setup() {
    createCanvas(600, 400);
    cols = width / scale;
    rows = height / scale;
    // Create the 'grid'
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // Populate each 'grid location' with a random 0 or 1
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(0);

    // Iterate through the 'grid'
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * scale;
            let y = j * scale;
            if (grid[i][j] == 1) {
                // Draw a rectangle in each 'grid location'
                fill(255);
                rect(x, y, scale - 1, scale - 1);
            }
        }
    }

    let next = make2DArray(cols, rows);

    // Compute 'next' based on 'grid'
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let state = grid[i][j];

            // Count 'live neighbours'
            let sum = 0;
            let neighbours = countNeighbours(grid, i, j);

            if (state == 0 && neighbours == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }

    }
    grid = next;

}