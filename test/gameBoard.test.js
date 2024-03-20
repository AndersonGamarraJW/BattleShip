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
    expect(gameBoard.board).toBe(emptyGameBoard);
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
    gameBoard.reciveHit(1, 1);
    gameBoard.reciveHit(1, 3);
    gameBoard.reciveHit(1, 5);
    gameBoard.reciveHit(3, 1);
    gameBoard.reciveHit(5, 4);

    expect(gameBoard.board).toBe(useGameBoard);
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
    const auxBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    expect(gameBoard.qShips).toBe(0);
    expect(gameBoard.board).toBe(auxBoard);
  });
});
