import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.shipObjsArr = [];
  }

  placeShip(x, y, length) {
    this.shipObjsArr.push(new Ship(x, y, length));
  }
}
