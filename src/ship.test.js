/* eslint-disable no-undef */
import Ship from './ship';

it('property length is set 5', () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(5);
});

it('property hitNum is set 0', () => {
  const ship = new Ship(5);
  expect(ship.hitNum).toBe(0);
});

it('method hit() increments hitNum property', () => {
  const ship = new Ship(5);
  ship.hit();
  expect(ship.hitNum).toBe(1);
});

it('method isSunk() return true when length and hitNum properties are the same value', () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

it('method isSunk() return false when length and hitNum properties are not the same value', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});
