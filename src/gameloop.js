import GameBoard from './gameboard';
import Player from './player';
import activateDragDrop from './drag-and-drop';
import {
  generateUI,
  displayHitOrMiss,
  displayWinner,
  removeChild,
  resetShipsToPlace,
  toggleNoClick,
  removePreventDropClass,
  hide,
  unHide,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
  gameInstruction,
} from './ui';

export default function game() {
  // create new objects
  const playerGameBoard = new GameBoard();
  const comGameBoard = new GameBoard();

  function startGame() {
    // reset and prepare the initial UI
    removeChild(playerGameboardDOM);
    removeChild(comGameboardDOM);
    generateUI();
    resetShipsToPlace();
    playerGameBoard.deleteShips();
    comGameBoard.deleteShips();

    // create Ships
    activateDragDrop(playerGameBoard);
    comGameBoard.placeShip(21, 5);
    comGameBoard.placeShip(31, 4);
    comGameBoard.placeShip(42, 3);
    comGameBoard.placeShip(84, 2);
    comGameBoard.placeShip(55, 1);
  }

  function gameLoop() {
    toggleNoClick(playerGameboardDOM);
    toggleNoClick(comGameboardDOM);
    removePreventDropClass();
    hide(startBtn);
    unHide(gameInstruction);

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

        // computer play
        const attackedCoords = playerCom.computerAttack();
        playerGameBoard.receiveAttack(attackedCoords);
        if (playerGameBoard.checkIfAllSunk()) {
          displayWinner('Computer');
        }
        displayHitOrMiss(playerGameBoard, 'player');
      });
    });
  }

  startGame();
  startBtn.addEventListener('click', gameLoop);
}
