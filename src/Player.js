const GameBoard = require("./GameBoard.js");
class Player {
  constructor(name, sizeBoard) {
    this._name = name;
    this._board = new GameBoard(sizeBoard);
  }
}
