// function to format the printed board output
const printBoard = (board) => {
  console.log(`Current board:`);
  // adding the pipe to the board. join() joins all elements of an array and combines them
  // console.log(board[0].join(' | '));
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};



// generic game board
let board = [[' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']];

printBoard(board);

console.log();
console.log(`!!!Beginning to test the board`)
console.log();

// changes two values to contain a user guess and a bomb
board[0][1] = 1;
board[2][2] = 'B';
printBoard(board);
