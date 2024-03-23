const { describe, test, beforeAll, expect } = require("@jest/globals");
const GameController = require("../src/GameController.js");
const Player = require("../src/Player.js");
describe("GameController before game", () => {
  let gameController;
  beforeAll(() => {
    gameController = new GameController();
  });
  test("Initial size board its 0", () => {
    expect(gameController.sizeBoard).toBe(0);
  });
  test("Set size board", () => {
    gameController.setSizeBoard(6);
    expect(gameController.sizeBoard).toBe(6);
  });
  test("Add players", () => {
    const player = new Player("player 1", 6);
    const player2 = new Player("player 2", 6);
    gameController.addPlayer(player);
    expect(gameController.qPlayers).toBe(1);
    gameController.addPlayer(player2);
    expect(gameController.qPlayers).toBe(2);
  });
});
//In game section
describe("GameController in game", () => {
  let gameController, player1, player2;
  beforeAll(() => {
    player1 = new Player("player 1", 6);
    player2 = new Player("player 2", 6);
    gameController = new GameController();
    gameController.setSizeBoard(6);
    gameController.addPlayer(player1);
    gameController.addPlayer(player2);
    gameController.initGame();
  });
  test("Toogle turn of players", () => {
    const prevTurnPlayer = gameController.currentPlayer;
    gameController.toogleTurn();
    expect(prevTurnPlayer === gameController.currentPlayer).toEqual(false);
  });
  test("Player attack other player", () => {
    const prevTurnPlayer = gameController.currentPlayer;
    gameController.toogleTurn();
    gameController.applyAttack(1, 2, prevTurnPlayer);
    expect(prevTurnPlayer.board[1][2]).toEqual(1);
  });
  test("Set target player", () => {
    gameController.setTargetPlayer(player1);
    expect(gameController.targetPlayer === player1).toEqual(true);
  });
});
//After game section
