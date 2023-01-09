export default class Ship {
  constructor(num) {
    this.length = num;
    this.hitNum = 0;
  }

  hit() {
    this.hitNum += 1;
  }

  isSunk() {
    return this.length === this.hitNum;
  }
}
