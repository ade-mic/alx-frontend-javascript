export default class Building {
  constructor(sqft) {
    this._sqrt = sqft;
  }

  get sqrt() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (new.target === this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
