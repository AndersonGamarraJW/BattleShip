const GameBoard = require("./GameBoard.js");

module.exports = class Player {
  constructor(name, sizeBoard) {
    this._name = name;
    this._board = new GameBoard(sizeBoard);
  }
  get board() {
    return this._board.board;
  }
  attack(x, y, toPlayer) {
    toPlayer.reciveAttack(x, y);
  }
  reciveAttack(x, y) {
    this._board.reciveHit(x, y);
  }
};
