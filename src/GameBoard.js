const ShipManager = require("./ShipManager.js");

module.exports = class GameBoard {
  constructor(size) {
    this._size = size;
    this._board = this._createBoard();
  }
  _createBoard() {
    return Array.from(Array(this._size), () => Array(this._size).fill(0));
  }
  get board() {
    return this._board;
  }
};
