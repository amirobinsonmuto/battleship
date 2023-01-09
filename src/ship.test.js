/* eslint-disable no-undef */
import Ship from './ship';

it('property length is set 5', () => {
  const ship = new Ship(2, 3, 5);
  expect(ship.length).toBe(5);
});

it('property hitNum is set 0', () => {
  const ship = new Ship(2, 3, 5);
  expect(ship.hitNum).toBe(0);
});

it('takes x y parameters for the start point coords', () => {
  const ship = new Ship(2, 3, 5);
  expect(ship.startCoord).toEqual([2, 3]);
});

it('stores all coordinates in the coords array para', () => {
  const ship = new Ship(2, 3, 3);
  expect(ship.coordsArr).toEqual([
    [2, 3],
    [2, 4],
    [2, 5],
  ]);
});

it('method hit() increments hitNum property', () => {
  const ship = new Ship(2, 3, 5);
  ship.hit();
  expect(ship.hitNum).toBe(1);
});

it('method isSunk() return true when length and hitNum properties are the same value', () => {
  const ship = new Ship(2, 3, 1);
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

it('method isSunk() return false when length and hitNum properties are not the same value', () => {
  const ship = new Ship(2, 3, 2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});
