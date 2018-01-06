/*
To play Minesweeper, we will create instances of MineSweeperGame in the
  terminal.

  For example:
    In the terminal, navigate to the lib directory and run 'node'
    Run '.load game.js' to load contents of this file
    Then create a Game instance and run commands like so:
      let game = new Game(3, 3, 3);
      game.playMove(0, 1);
      game.playMove(1, 2);
      When done, run '.exit'

Below is a list of some potential features to add to your Minesweeper game:
  Add validation to ensure that board dimensions make sense. For example, a
    board should not be able to be created with more bombs than it has tiles.
  Add a timer which lets players know how long it took them to win (or lose).
  Add recursive flipping, when a tile is flipped that isn't touching a bomb
    (would have the number zero printed on it), all adjacent tiles additionally
    flip over.
  Add a method to place flags at a tile instead of flipping that tile. If a
    square has a flag on it, it can't be flipped over.
*/

/* imports */
import { Board } from './board';

/* start Game class */
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  /* methods */
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);

    // logic that determines what should happen after a player flips a tile
    //  if the flipped tile has a bomb the game is over, if the board does not
    //    have any safe tiles left the player won the game, otherwise the player
    //    keeps playing
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('User found a bomb, GAME OVER!');
      this._board.print();
    } else if(!this._board.hasSafeTiles()) {
      console.log('Congratulations! You win!');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }
}
/* end Game class */
