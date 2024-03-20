const Player = require("../src/Player.js");
describe("Player actions", () => {
  let player, player2;
  beforeEach(() => {
    player = new Player("Test player 1", 6);
    player2 = new Player("Test player 2", 6);
  });

  test("Attack", () => {
    player.attack(1, 2, player2);
    expect(player2.board[1][2]).toBe(1);
  });
});
