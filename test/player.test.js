const Player = require("../src/Player.js");
const Ship = require("../src/ship.js");

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

  test("Add Ship", () => {
    const ship = new Ship({
      point1: { x: 1, y: 1, status: true },
      point2: { x: 1, y: 2, status: true },
      point3: { x: 1, y: 3, status: true },
    });
    player.addShip(ship);
    expect(player.qShips).toBe(1);
    expect(player.getShip(0)).toEqual(ship);
  });
});
