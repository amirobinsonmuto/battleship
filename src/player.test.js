// eslint-disable-next-line no-undef
jest.mock('./helper');

/* eslint-disable no-undef */
import Player from './player';

it('player is constructed', () => {
  expect(new Player('A', false, true)).toEqual({
    name: 'A',
    isComputer: false,
    isPlaying: true,
    coordsAlreadyAttackedArr: [],
  });
});

it('player is switched at every play', () => {
  const playerA = new Player('A', false, true);
  playerA.switchPlayer();
  expect(playerA.isPlaying).toBeFalsy();
});

it('player attacks and picks a coords', () => {
  const playerA = new Player('A', false, true);
  expect(playerA.playerAttack(23)).toBe(23);
});

// returnRandomNum is replaced with a mock function to return always 55
it('computer attacks and picks a random coords', () => {
  const playerCom = new Player('Com', true, true);
  expect(playerCom.computerAttack()).toBe(55);
});

it('when a player picks coords to attack, store it in the coordsAlreayAttackedArr', () => {
  const playerA = new Player('A', false, true);
  playerA.playerAttack(23);
  expect(playerA.coordsAlreadyAttackedArr).toEqual([23]);
});

it('when a com picks coords to attack, store it in the coordsAlreayAttackedArr', () => {
  const playerCom = new Player('Com', true, true);
  playerCom.computerAttack();
  playerCom.computerAttack();
  playerCom.computerAttack();
  expect(playerCom.coordsAlreadyAttackedArr).toEqual([55, 55, 55]);
});
