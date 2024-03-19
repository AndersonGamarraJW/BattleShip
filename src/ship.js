class Ship {
  //positions { {x,y,status}, {x,y,status}, {x,y,status}, {x,y,status} }
  constructor(positions) {
    this._positions = positions;
    this._qHits = 0;
    this._isSunk = false;
  }
  get qHits() {
    return this._qHits;
  }
  set qHits(value) {
    this._qHits = value;
  }
  _isHit(x, y) {
    let returnValue = false;
    Object.values(this._positions).forEach((point) => {
      if (point.x === x && point.y === y) {
        if (!point.status) throw new Error("Position already hit");
        point.status = false;
        returnValue = true;
      }
    });
    return returnValue;
  }

  hit(x, y) {
    if (this._isHit(x, y)) this._qHits++;
  }
  isSink() {
    return Object.values(this._positions).every((point) => !point.status);
  }
}
module.exports = Ship;
