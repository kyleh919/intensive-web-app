'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* start Board class */
var Board = exports.Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns; // size of the game board
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);

    // console.log();
    // console.log(this._playerBoard);
    // console.log();
    // console.log(this._bombBoard);
    // console.log();
  }

  /* getters */


  _createClass(Board, [{
    key: 'flipTile',


    /* methods */
    /*
    The goal of flipTile() is to allow the player to flip a tile and to update that
      tile accordingly. The function should explicitly check for two things:
       If the specified tile has already been flipped
      If the specified tile has a bomb in it
    Otherwise, that tile should be updated with the number of neighboring bombs
    */
    value: function flipTile(rowIndex, columnIndex) {
      // checks to see if the tile is empty, if so, it has neither been flipped
      //  nor does it contain a bomb
      if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
        this._numberOfTiles--; // removing a tile from the total
      } else {
        // tile is empty with no bomb, flip the tile and display how many
        //  neighboring bombs there are
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        this._numberOfTiles--; // removing a tile from the total
      }
    }

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

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      // Debug
      // console.log();
      // console.log();
      // console.log(bombBoard);

      //


      // a, b, c, d, e, f, g, h
      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      // because bombBoard is a nested array, the length of the array is the number
      //  of rows
      var numberOfRows = this._bombBoard.length;
      // because bombBoard is a nested array, the length of the first element
      //  in the array is = the number of columns
      var numberOfColumns = this._bombBoard[0].length;
      var numberOfBombs = 0;

      /*
        Interactive aspect:
          Grab the row and column indices of the tile that a user specifies (say
            they input 0, 2, we'll have to use that to check for bombs around the
            tile in the first row and third column)
          Check all possible neighboring tiles around the indicated tile
          If a neighboring tile has a bomb, increment the bomb counter
      */
      neighborOffsets.forEach(function (offset) {
        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];

        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs++;
          }
        }
      });

      // console.log(numberOfBombs);

      return numberOfBombs;
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
    }

    // prints board

  }, {
    key: 'print',
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }

    // generates a players board of a given size to hold the player's guesses.
    //  accepts the number of rows and number of columns as parameters and sets the
    //  board accordingly

  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = [];

      for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        var row = [];

        for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
          row.push(' ');
        }
        board.push(row);
      }

      return board;
    }

    // generates a bomb board based on the number of bombs passed in as a parameters
    //  accepts the number of rows and number of columns as parameters and sets the
    //  board accordingly

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      var board = [];
      var numberOfBombsPlaced = 0;
      var randomRowIndex = 0;
      var randomColumnIndex = 0;

      for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        var row = [];

        for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
          row.push(null);
        }
        board.push(row);
      }

      // console.log('\t***Debug*** ' + 'numberOfBombsPlaced ' + numberOfBombsPlaced + ' ' + 'numberOfBombs ' + numberOfBombs);

      // generates bombs, the total number of bombs is based on a passed in
      //  parameter above
      //  randomly generates the row,column of the bomb
      while (numberOfBombsPlaced < numberOfBombs) {
        randomRowIndex = Math.floor(Math.random() * numberOfRows);
        randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        // console.log('\t***Debug*** ' + 'row ' + randomRowIndex + ' ' + 'col ' + randomColumnIndex);

        // check to see if the current row,column spot has a bomb already, if not,
        //  add one
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        }
      }

      return board;
    }
  }]);

  return Board;
}();
/* end Board class */