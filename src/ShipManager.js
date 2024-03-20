module.exports = class ShipManager {
  constructor() {
    this._ships = [];
  }
  addShip(observer) {
    this._ships.push(observer);
  }
  removeShip(observer) {
    this._ships = this._ships.filter((ob) => ob !== observer);
  }
  notifyShips(x, y) {
    this._ships.forEach((observer) => {
      observer.hit(x, y);
    });
  }
  cleanShips() {
    this._ships.forEach((observer) => {
      if (observer.isSunk()) this.removeShip(observer);
    });
  }
  get qShips() {
    return this._ships.length;
  }
};
