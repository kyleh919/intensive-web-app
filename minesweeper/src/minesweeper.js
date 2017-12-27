// Instead of creating one singular game board, we're going to create two: one
//  board for the player's guesses and another board that will hold the actual
//  bomb locations.


// generates a players board of a given size to hold the player's guesses.
//  accepts the number of rows and number of columns as parameters and sets the
//  board accordingly
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];

    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }

  return board;
};

// generates a bomb board based on the number of bombs passed in as a parameters
//  accepts the number of rows and number of columns as parameters and sets the
//  board accordingly
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  let numberOfBombsPlaced = 0;
  let randomRowIndex = 0;
  let randomColumnIndex = 0;

  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];

    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  // console.log('\t***Debug*** ' + 'numberOfBombsPlaced ' + numberOfBombsPlaced + ' ' + 'numberOfBombs ' + numberOfBombs);

  // generates bombs, the total number of bombs is based on a passed in
  //  parameter above
  //  randomly generates the row,column of the bomb
  while(numberOfBombsPlaced < numberOfBombs) {
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // console.log('\t***Debug*** ' + 'row ' + randomRowIndex + ' ' + 'col ' + randomColumnIndex);

    // check to see if the current row,column spot has a bomb already, if not,
    //  add one
    if(board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

/*
The function will determine the size of the game board
The function will use the location of the flipped tile
Using an array index offset system (more on this later), the function will check
  all adjacent tiles for bombs
If a bomb exists at an adjacent tile, you'll record it by incrementing a bomb
  counter
The number of bombs adjacent to the flipped tile will be returned by the
  function


A flipped tile can have 8 possible neighbors, at most, no matter the size of a
  board
a | b | c
d | + | e
f | g | h
a = (-1,-1)
e = (0,1)
*/
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  // Debug
  // console.log();
  // console.log();
  // console.log(bombBoard);

  //


  // a, b, c, d, e, f, g, h
  const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  // because bombBoard is a nested array, the length of the array is the number
  //  of rows
  const numberOfRows = bombBoard.length;
  // because bombBoard is a nested array, the length of the first element
  //  in the array is = the number of columns
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  /*
    Interactive aspect:
      Grab the row and column indices of the tile that a user specifies (say
        they input 0, 2, we'll have to use that to check for bombs around the
        tile in the first row and third column)
      Check all possible neighboring tiles around the indicated tile
      If a neighboring tile has a bomb, increment the bomb counter
  */
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if(neighborRowIndex >= 0 &&
       neighborRowIndex < numberOfRows &&
       neighborColumnIndex >= 0 &&
       neighborColumnIndex < numberOfColumns) {
      if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });

  // console.log(numberOfBombs);

  return numberOfBombs;
}

/*
The goal of flipTile() is to allow the player to flip a tile and to update that
  tile accordingly. The function should explicitly check for two things:

  If the specified tile has already been flipped
  If the specified tile has a bomb in it
Otherwise, that tile should be updated with the number of neighboring bombs
*/
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  // checks to see if the tile is empty, if so, it has neither been flipped
  //  nor does it contain a bomb
  if(playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if(bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    // tile is empty with no bomb, flip the tile and display how many
    //  neighboring bombs there are
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,
                                                                  rowIndex,
                                                                  columnIndex);
  }
}

// prints board
let printBoard = function(board) {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}


/*
  FUNCTION CALLS
*/
// BOARD SETUP
let playerBoard = generatePlayerBoard(3, 4);
// console.log(playerBoard);
let bombBoard = generateBombBoard(3, 4, 5);
// console.log(bombBoard);

// PRINT BOARDS
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);


// getNumberOfNeighborBombs(bombBoard, 1, 1);
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);
