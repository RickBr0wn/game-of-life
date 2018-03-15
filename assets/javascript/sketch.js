// Global variables
let grid, cols, rows;
let scale = 40;

function make2DArray(cols, rows){
    let arr = new Array(cols);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup(){
    // Create the grid
    grid = make2DArray(cols, rows);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            // Populate with a random 0 or 1
            grid[i][j] = floor(random(2));
        }
    }
    
}

function draw(){

}