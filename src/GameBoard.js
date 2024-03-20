const ShipManager = require("./ShipManager.js");

module.exports = class GameBoard {
  constructor(size) {
    this._size = size;
    this._board = this._createBoard();
    this._ships = new ShipManager();
  }
  _createBoard() {
    return Array.from(Array(this._size), () => Array(this._size).fill(0));
  }

  _updateBoard(x, y) {
    this._board[x][y] = 1;
    this._ships.notifyShips(x, y);
    this._ships.cleanShips();
  }
  get board() {
    return this._board;
  }
  get qShips() {
    return this._ships.qShips;
  }
  reciveHit(x, y) {
    this._updateBoard(x, y);
  }
  addShip(ship) {
    this._ships.addShip(ship);
  }
};
