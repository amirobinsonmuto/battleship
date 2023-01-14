import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.shipObjArr = [];
    this.hitCoordsArr = [];
    this.missedCoordsArr = [];
  }

  placeShip(coords, length) {
    this.shipObjArr.push(new Ship(coords, length));
  }

  receiveAttack(attackedCoords) {
    this.shipObjArr.forEach((ship) => {
      if (ship.coordsArr.some((coords) => coords === attackedCoords)) {
        ship.hit();
        this.hitCoordsArr.push(attackedCoords);
      }
    });
    if (!this.hitCoordsArr.some((coords) => coords === attackedCoords)) {
      this.missedCoordsArr.push(attackedCoords);
    }
  }

  checkIfAllSunk() {
    return this.shipObjArr.every((ship) => ship.isSunk() === true);
  }
}
