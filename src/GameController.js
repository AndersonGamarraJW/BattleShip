class GameController {
  constructor() {
    this._sizeBoard = 0;
    this._players = [];
  }
  get sizeBoard() {
    return this._sizeBoard;
  }
  get qPlayers() {
    return this._players.length;
  }
  setSizeBoard(size) {
    this._sizeBoard = size;
  }
  addPlayer(player) {
    this._players.push(player);
  }
}
