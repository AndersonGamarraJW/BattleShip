const Ship = require("../src/ship.js");

describe("Ship impact", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship({
      point1: { x: 1, y: 1, status: true },
      point2: { x: 1, y: 2, status: true },
      point3: { x: 1, y: 3, status: true },
    });
  });

  test("hit", () => {
    ship.hit(1, 2);
    expect(ship.qHits).toBe(1);
    ship.hit(1, 3);
    expect(ship.qHits).toBe(2);
  });

  test("fail impact", () => {
    const prevHits = ship.hits;
    ship.hit(1, 4);
    expect(ship.hits).toBe(prevHits);
  });

  test("same impact", () => {
    const prevHits = ship.hits;
    ship.hit(1, 2);
    expect(() => {
      ship.hit(1, 2);
    }).toThrow("Position already hit");
  });
  test("Sink", () => {
    ship.hit(1, 2);
    ship.hit(1, 1);
    ship.hit(1, 3);
    expect(ship.qHits).toBe(3);
    expect(ship.isSunk()).toBe(true);
  });
});
