export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
