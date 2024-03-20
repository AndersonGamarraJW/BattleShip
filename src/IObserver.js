module.exports = class IObserver {
  constructor() {
    if (this.constructor === IObserver) throw new Error("This is a interface");
  }
  hit(x, y) {
    throw new Error("No implement");
  }
};
