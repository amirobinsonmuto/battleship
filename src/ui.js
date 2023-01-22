const playerGameboardDOM = document.getElementById('player-gameboard');
const comGameboardDOM = document.getElementById('com-gameboard');
const instructionPlaceShips = document.getElementById(
  'instruction-place-ships'
);
const shipsToPlace = document.querySelectorAll('.ship-to-place');
const shipsToPlaceArr = [...shipsToPlace];
let divCells;
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalMessage = document.getElementById('modal-message');
const startBtn = document.getElementById('start-button');
const startOverBtn = document.getElementById('start-btn');
let isAllShipsPlaced;

// generate the initial UI
function generateUI() {
  for (let i = 0; i <= 9; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('id', `row${i}`);
    divRow.classList.add('divRow');
    playerGameboardDOM.appendChild(divRow);

    for (let k = 0; k <= 9; k++) {
      const divCell = document.createElement('div');
      divRow.appendChild(divCell);
      const id = parseInt(`${i}${k}`);
      divCell.setAttribute('data', id);
      divCell.setAttribute('id', 'player' + id);
      divCell.classList.add('divCell');
    }
  }

  for (let i = 0; i <= 9; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('id', `row${i}`);
    divRow.classList.add('divRow');
    comGameboardDOM.appendChild(divRow);

    for (let k = 0; k <= 9; k++) {
      const divCell = document.createElement('div');
      divRow.appendChild(divCell);
      const id = parseInt(`${i}${k}`);
      divCell.setAttribute('data', id);
      divCell.setAttribute('id', 'com' + id);
      divCell.classList.add('divCell');
    }
  }

  divCells = document.querySelectorAll('.divCell');
}

function resetShipsToPlace() {
  shipsToPlaceArr.forEach((shipToPlace) => {
    shipToPlace.classList.remove('hidden');
  });
}

// display hit, miss, or sunk
function displayHitOrMiss(obj, playerOrCom) {
  obj.hitCoordsArr.forEach((e) => {
    document.getElementById(playerOrCom + e).classList.add('hit');
  });

  obj.missedCoordsArr.forEach((e) => {
    document.getElementById(playerOrCom + e).classList.add('missed');
  });

  obj.shipObjArr.forEach((ship) => {
    if (ship.isSunk()) {
      ship.coordsArr.forEach((e) => {
        document.getElementById(playerOrCom + e).classList.add('sunk');
      });
    }
  });
}

// display the winner in a modal
function displayWinner(winnerName) {
  modalMessage.textContent = `${winnerName} wins!`;
  modal.classList.remove('hidden');
}

// hide modal
function hideModal() {
  modal.classList.add('hidden');
  modal.removeChild(modal.lastChild);
}

// helper function to remove all children under an element
function removeChild(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// display placed ships
function displayPlacedShips(obj) {
  obj.shipObjArr.forEach((ship) => {
    ship.coordsArr.forEach((e) => {
      document.getElementById('player' + e).classList.add('ship');
    });
  });
}

function displayStartGameBtn() {
  startBtn.classList.remove('hidden');
  instructionPlaceShips.classList.add('hidden');
}

function toggleNoClick(obj) {
  obj.classList.toggle('no-click');
}

function removePreventDropClass() {
  const preventDropSurroundingElements = document.querySelectorAll(
    '.prevent-drop-surrounding'
  );
  preventDropSurroundingElements.forEach((el) => {
    el.classList.remove('prevent-drop-surrounding');
  });
}

function hide(obj) {
  obj.classList.add('hidden');
}

export {
  generateUI,
  displayHitOrMiss,
  displayWinner,
  removeChild,
  hideModal,
  resetShipsToPlace,
  displayStartGameBtn,
  displayPlacedShips,
  toggleNoClick,
  removePreventDropClass,
  hide,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
  startOverBtn,
  isAllShipsPlaced,
  shipsToPlaceArr,
};
