export default class Ship {
  constructor(startCoords, length) {
    this.length = length;
    this.hitNum = 0;
    this.startCoords = startCoords;
    this.coordsArr = this.calculateCoords();
  }

  calculateCoords() {
    // eslint-disable-next-line no-plusplus
    this.coordsArr = [];
    for (let i = 0; i <= Ship.length; i++) {
      this.coordsArr.push(this.startCoords + i);
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
