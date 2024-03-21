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
    gameController.addPlayer(2);
    expect(gameController.qPlayers).toBe(2);
  });
});

//In game section
//After game section
