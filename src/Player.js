const GameBoard = require("./GameBoard.js");

module.exports = class Player {
  constructor(name, sizeBoard) {
    this._name = name;
    this._board = new GameBoard(sizeBoard);
  }
  get board() {
    return this._board.board;
  }
  get qShips() {
    return this._board.qShips;
  }
  getShip(index) {
    return this._board.getShip(index);
  }
  attack(x, y, toPlayer) {
    toPlayer.reciveAttack(x, y);
  }
  reciveAttack(x, y) {
    this._board.reciveHit(x, y);
  }
  addShip(ship) {
    this._board.addShip(ship);
  }
};
