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

  // generates bombs, the total number of bombs is based on a passed in parameter above
  //  randomly generates the row,column of the bomb
  while(numberOfBombsPlaced < numberOfBombs) {
    // add logic to not duplicate spots of bombs after learning control flow
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // console.log('\t***Debug*** ' + 'row ' + randomRowIndex + ' ' + 'col ' + randomColumnIndex);

    board[randomRowIndex][randomColumnIndex] = 'B';


    numberOfBombsPlaced++;
  }

  return board;
};

// prints board
let printBoard = function(board) {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}


let playerBoard = generatePlayerBoard(3,4);
// console.log(playerBoard);

let bombBoard = generateBombBoard(3,4,5);
// console.log(bombBoard);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);


// console.log(printBoard(myBoard));




// sanbox
// let fun = [[null, null, null],
//           [null, null, null]];
// // let fun = [[' ', ' ', ' '],
// //           [' ', ' ', ' ']];
// console.log(fun);
// fun[0][0] = 'hi';
// // fun[0] = 'hi';
// console.log(fun);
