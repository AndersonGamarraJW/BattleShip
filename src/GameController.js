module.exports = class GameController {
  constructor() {
    this._sizeBoard = 0;
    this._players = [];
    /*
     * Variable storing the current player to attack
     * @type {Player}
     * @private
     */
    this._currentPlayer = undefined;
    /*
     * Variable storing the target player to attack
     * @type {Player}
     * @private
     */
    this._targetPlayer = undefined;
    /*
     * Variable storing iterator values
     * @type{int}
     * @private
     */
    this._iteratorTurn = undefined;
  }
  _setupIteratorTurnVariable() {
    this._iteratorTurn = this._getRandomNumber(0, this._players.length - 1);
  }
  _incrementIteratorTurn() {
    this._iteratorTurn += 1;
    if (this._iteratorTurn >= this._players.length) this._iteratorTurn = 0;
  }
  /*
   * Function to set currentPlayer varible at start game
   * @type{Function}
   * @private
   */
  _setCurrentPlayer() {
    this._currentPlayer = this._players[this._iteratorTurn];
  }
  /*
   * Function to turn players
   * @type{Function}
   * @private
   */
  _toogleTurnPlayer() {
    this._incrementIteratorTurn();
    this._setCurrentPlayer();
  }
  /*
   * Get random rumber between min and max limits
   * @type{Function}
   * @private
   */
  _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  get sizeBoard() {
    return this._sizeBoard;
  }
  get qPlayers() {
    return this._players.length;
  }
  get currentPlayer() {
    return this._currentPlayer;
  }
  get targetPlayer() {
    return this._targetPlayer;
  }
  initGame() {
    this._setupIteratorTurnVariable();
    this._setCurrentPlayer();
    // start timer
  }
  toogleTurn() {
    this._toogleTurnPlayer();
  }
  setSizeBoard(size) {
    this._sizeBoard = size;
  }
  addPlayer(player) {
    this._players.push(player);
  }
  /*
   * Apply an attack at the specified position
   * @param{number} x
   * @param{number} y
   * @param{Player} targetPlayer
   * @returns void
   */
  applyAttack(x, y, targetPlayer) {
    this._currentPlayer.attack(x, y, targetPlayer);
  }
};
