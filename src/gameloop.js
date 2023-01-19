import GameBoard from './gameboard';
import Player from './player';
import {
  generateUI,
  displayHitOrMiss,
  switchUserUI,
  displayWinner,
  removeChild,
  hideModal,
  activateDragDrop,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
  startOverBtn,
  isAllShipsPlaced,
} from './ui';

export default function game() {
  // create new objects
  const playerGameBoard = new GameBoard();
  const comGameBoard = new GameBoard();

  function startGame() {
    // prepare the initial UI
    hideModal();
    removeChild(playerGameboardDOM);
    removeChild(comGameboardDOM);
    generateUI();

    activateDragDrop(playerGameBoard);

    comGameBoard.placeShip(21, 5);
    // comGameBoard.placeShip(31, 4);
    // comGameBoard.placeShip(42, 3);
    // comGameBoard.placeShip(84, 2);
    // comGameBoard.placeShip(55, 1);
  }

  function gameLoop() {
    startBtn.classList.add('hidden');

    const playerA = new Player('A', false, true);
    const playerCom = new Player('Com', true, false);

    divCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const coords = parseInt(cell.getAttribute('data'));
        playerA.playerAttack(coords);
        comGameBoard.receiveAttack(coords);
        if (comGameBoard.checkIfAllSunk()) {
          displayWinner('Player A');
        }
        displayHitOrMiss(comGameBoard, 'com');
        setTimeout(() => {
          switchUserUI(playerGameboardDOM, comGameboardDOM);
        }, 500);

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
          }, 500);
        }, 1500);
        // }
      });
    });
  }

  startGame();
  startBtn.addEventListener('click', gameLoop);
  startOverBtn.addEventListener('click', startGame);
}
