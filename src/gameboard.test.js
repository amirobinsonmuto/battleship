/* eslint-disable no-undef */
import GameBoard from './gameboard';

it('gameBoard shipObjs property has an empty array to start', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.shipObjsArr).toEqual([]);
});

it('placeShip() method will add Ship instances to shipObjsArr', () => {
  // start here!
  const gameBoard = new GameBoard();
  gameBoard.placeShip(2, 3, 3);
  expect(gameBoard.shipObjsArr).toEqual([
    {
      length: 3,
      hitNum: 0,
      startCoord: [2, 3],
      coordsArr: [
        [2, 3],
        [2, 4],
        [2, 5],
      ],
    },
  ]);
});
