/* eslint-disable no-undef */
import GameBoard from './gameboard';

it('gameBoard shipObjs property has an empty array to start', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.shipObjArr).toEqual([]);
});

it('placeShip() method will add Ship instances to shipObjsArr', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  expect(gameBoard.shipObjArr).toEqual([
    {
      length: 3,
      hitNum: 0,
      startCoords: 23,
      coordsArr: [23, 24, 25],
    },
  ]);
});

it('placeShip() method will add multiple Ship instances to shipObjsArr', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(67, 3);
  expect(gameBoard.shipObjArr).toEqual([
    {
      length: 3,
      hitNum: 0,
      startCoords: 23,
      coordsArr: [23, 24, 25],
    },
    {
      length: 3,
      hitNum: 0,
      startCoords: 67,
      coordsArr: [67, 68, 69],
    },
  ]);
});

it('when hitCoords matches one of the coords in a ship object, execute ship.hit()', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(67, 3);
  gameBoard.placeShip(52, 3);
  gameBoard.receiveAttack(69);
  expect(gameBoard.shipObjArr[1].hitNum).toBe(1);
});

it('when hitCoords matches one of the coords in a ship object, record the coords and push it to hitCoordsArr', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(67, 3);
  gameBoard.placeShip(52, 3);
  gameBoard.receiveAttack(68);
  expect(gameBoard.hitCoordsArr[0]).toBe(68);
});

it('when hitCoords does not matche one of the coords in a ship object, record the coords and push it to missedCoordsArr', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(67, 3);
  gameBoard.placeShip(52, 3);
  gameBoard.receiveAttack(12);
  expect(gameBoard.missedCoordsArr[0]).toBe(12);
});

it('check if all ships are sunk when attacked and return true if yes', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(81, 2);
  gameBoard.receiveAttack(23);
  gameBoard.receiveAttack(24);
  gameBoard.receiveAttack(25);
  gameBoard.receiveAttack(81);
  gameBoard.receiveAttack(82);
  expect(gameBoard.checkIfAllSunk()).toBeTruthy();
});

it('check if all ships are sunk when attacked and return false if not', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(23, 3);
  gameBoard.placeShip(81, 2);
  gameBoard.receiveAttack(23);
  gameBoard.receiveAttack(24);
  gameBoard.receiveAttack(25);
  gameBoard.receiveAttack(81);
  expect(gameBoard.checkIfAllSunk()).toBeFalsy();
});
