const GameBoard = require("../src/GameBoard.js");
const Ship = require("../src/ship.js");
describe("Gameboard", () => {
  let gameBoard;
  let ship;
  beforeEach(() => {
    gameBoard = new GameBoard(6);
    ship = new Ship({
      point1: { x: 1, y: 1, status: true },
      point2: { x: 1, y: 2, status: true },
      point3: { x: 1, y: 3, status: true },
    });
  });

  test("New game board", () => {
    const emptyGameBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    expect(gameBoard.board).toEqual(emptyGameBoard);
  });

  test("Game board use", () => {
    const useGameBoard = [
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0],
    ];
    gameBoard.reciveHit(0, 1);
    gameBoard.reciveHit(1, 3);
    gameBoard.reciveHit(1, 5);
    gameBoard.reciveHit(3, 1);
    gameBoard.reciveHit(5, 4);

    expect(gameBoard.board).toEqual(useGameBoard);
  });

  test("Add ship", () => {
    gameBoard.addShip(ship);
    expect(gameBoard.qShips).toBe(1);
  });

  test("Drop Ship", () => {
    gameBoard.addShip(ship);
    gameBoard.reciveHit(1, 1);
    gameBoard.reciveHit(1, 2);
    gameBoard.reciveHit(1, 3);
    expect(ship.isSunk()).toBe(true);
    const auxBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    expect(gameBoard.qShips).toBe(0);
    expect(gameBoard.board).toEqual(auxBoard);
  });
  test("Drop ship on multiply ship", () => {
    const ship2 = new Ship({
      point1: { x: 4, y: 4, status: true },
      point2: { x: 3, y: 4, status: true },
    });
    gameBoard.addShip(ship);
    gameBoard.addShip(ship2);
    gameBoard.reciveHit(1, 1);
    gameBoard.reciveHit(1, 2);
    gameBoard.reciveHit(1, 3);

    expect(gameBoard.qShips).toBe(1);
    gameBoard.reciveHit(4, 4);
    gameBoard.reciveHit(3, 4);
    expect(gameBoard.qShips).toBe(0);
  });
});
