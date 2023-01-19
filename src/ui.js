const playerGameboardDOM = document.getElementById('player-gameboard');
const comGameboardDOM = document.getElementById('com-gameboard');
// const shipPlacementDOM = document.getElementById('ship-placement-container');
const shipsToPlace = document.querySelectorAll('.ship-to-place');
const shipsToPlaceArr = [...shipsToPlace];
let divCells;
const modal = document.getElementById('modal');
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

// change UI when a user is switched
function switchUserUI(obj1, obj2) {
  playerGameboardDOM.classList.toggle('being-attacked');
  comGameboardDOM.classList.toggle('being-attacked');
}

// display the winner in a modal
function displayWinner(winnerName) {
  const winnerNameP = document.createElement('p');
  winnerNameP.textContent = `${winnerName} wins!`;
  modal.appendChild(winnerNameP);
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
}

// drag and drop
function activateDragDrop(boardObj) {
  let shipLength;
  let droppable;
  let preventDropCellIDArr = [];

  // draggable elements
  shipsToPlaceArr.forEach((shipToPlace) => {
    shipToPlace.addEventListener('dragstart', () => {
      shipLength = shipToPlace.getAttribute('data-length');

      // prevent drops when the ship length does not fit in a row
      for (let i = 0; i < shipLength - 1; i++) {
        let firstDigit = 9 - i;
        for (let k = 0; k <= 9; k++) {
          preventDropCellIDArr.push('player' + parseInt(`${k}${firstDigit}`));
        }
      }

      preventDropCellIDArr.forEach((id) => {
        document.getElementById(id).classList.add('prevent-drop');
      });
    });

    shipToPlace.addEventListener('dragend', () => {
      if (droppable) {
        shipToPlace.classList.add('hidden');
        if (shipsToPlaceArr.every((el) => el.classList.contains('hidden'))) {
          displayStartGameBtn();
        }
      }

      // reset - prevent drops when the ship length does not fit in a row
      preventDropCellIDArr.forEach((id) => {
        document.getElementById(id).classList.remove('prevent-drop');
      });
      preventDropCellIDArr = [];
    });
  });

  // disable drop outside of player board
  playerGameboardDOM.addEventListener('dragover', () => {
    droppable = true;
  });

  playerGameboardDOM.addEventListener('dragleave', () => {
    droppable = false;
  });

  // elements to drop draggable on
  [...divCells].forEach((divCell) => {
    divCell.addEventListener('dragover', (e) => {
      if (!divCell.classList.contains('prevent-drop')) {
        e.preventDefault();
      }
    });

    divCell.addEventListener('drop', (e) => {
      e.preventDefault();
      const coords = parseInt(divCell.getAttribute('data'));
      const length = parseInt(shipLength);

      boardObj.placeShip(coords, length);
      displayPlacedShips(boardObj);
    });
  });
}

export {
  generateUI,
  displayHitOrMiss,
  switchUserUI,
  displayWinner,
  removeChild,
  hideModal,
  activateDragDrop,
  resetShipsToPlace,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
  startOverBtn,
  isAllShipsPlaced,
};
