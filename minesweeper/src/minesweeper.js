// hardcoded one row with three columns
const blankLine = '  |   |  ';

console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// represents what the board will look like when the player guesses by clicking the first square of this row
const guessLine = '1 |   |  ';
// represents what the board will look like when the player clicks and reveals a bomb
const bombLine = '  | B |  ';


console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
