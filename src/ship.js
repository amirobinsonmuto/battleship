export default class Ship {
  constructor(x, y, length) {
    this.length = length;
    this.hitNum = 0;
    this.startCoord = [x, y];
    this.coordsArr = this.calculateCoords();
  }

  calculateCoords() {
    // eslint-disable-next-line no-plusplus
    this.coordsArr = [];
    for (let i = 0; i < Ship.length; i++) {
      this.coordsArr.push([this.startCoord[0], this.startCoord[1] + i]);
    }
    return this.coordsArr;
  }

  hit() {
    this.hitNum += 1;
  }

  isSunk() {
    return this.length === this.hitNum;
  }
}
