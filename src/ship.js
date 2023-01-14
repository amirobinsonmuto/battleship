export default class Ship {
  constructor(startCoords, length) {
    this.length = length;
    this.hitNum = 0;
    this.startCoords = startCoords;
    this.coordsArr = this.calculateCoords();
  }

  calculateCoords() {
    // eslint-disable-next-line no-plusplus
    const coordsArr1 = [];
    for (let i = 0; i < this.length; i++) {
      coordsArr1.push(this.startCoords + i);
    }
    return coordsArr1;
  }

  hit() {
    this.hitNum += 1;
  }

  isSunk() {
    return this.length === this.hitNum;
  }
}
