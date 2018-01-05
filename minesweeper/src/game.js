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
