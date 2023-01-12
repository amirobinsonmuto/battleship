/* eslint-disable no-undef */
import Ship from './ship';

it('property length is set 5', () => {
  const ship = new Ship(23, 5);
  expect(ship.length).toBe(5);
});

it('property hitNum is set 0', () => {
  const ship = new Ship(23, 5);
  expect(ship.hitNum).toBe(0);
});

it('takes x y parameters for the start point coords', () => {
  const ship = new Ship(23, 5);
  expect(ship.startCoords).toEqual(23);
});

it('stores all coordinates in the coordsArr', () => {
  const ship = new Ship(23, 3);
  expect(ship.coordsArr).toEqual([23, 24, 25]);
});

it('stores all coordinates in the coordsArr', () => {
  const ship = new Ship(42, 3);
  expect(ship.coordsArr).toEqual([42, 43, 44]);
});

it('method hit() increments hitNum property', () => {
  const ship = new Ship(23, 5);
  ship.hit();
  expect(ship.hitNum).toBe(1);
});

it('method isSunk() return true when length and hitNum properties are the same value', () => {
  const ship = new Ship(23, 1);
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

it('method isSunk() return false when length and hitNum properties are not the same value', () => {
  const ship = new Ship(23, 2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});
