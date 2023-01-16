import GameBoard from './gameboard';
import Player from './player';
import {
  generateUI,
  displayHitOrMiss,
  switchUserUI,
  displayShip,
  displayWinner,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
} from './ui';

export default function gameLoop() {
  generateUI();

  const playerGameBoard = new GameBoard();
  const comGameBoard = new GameBoard();
  const playerA = new Player('A', false, true);
  const playerCom = new Player('Com', true, false);

  playerGameBoard.placeShip(23, 5);
  playerGameBoard.placeShip(51, 3);
  playerGameBoard.placeShip(74, 2);

  displayShip(playerGameBoard);

  comGameBoard.placeShip(21, 5);
  comGameBoard.placeShip(42, 3);
  comGameBoard.placeShip(84, 2);

  divCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      const coords = parseInt(cell.getAttribute('data'));
      playerA.playerAttack(coords);
      comGameBoard.receiveAttack(coords);
      if (comGameBoard.checkIfAllSunk()) {
        console.log('player wins');
        displayWinner('Player A');
      }
      displayHitOrMiss(comGameBoard, 'com');
      setTimeout(() => {
        switchUserUI(playerGameboardDOM, comGameboardDOM);
      }, 1000);

      // computer play
      setTimeout(() => {
        const attackedCoords = playerCom.computerAttack();
        playerGameBoard.receiveAttack(attackedCoords);
        if (playerGameBoard.checkIfAllSunk()) {
          displayWinner('Computer');
        }
        displayHitOrMiss(playerGameBoard, 'player');
        setTimeout(() => {
          switchUserUI(playerGameboardDOM, comGameboardDOM);
        }, 1000);
      }, 2000);
      // }
    });
  });
}
