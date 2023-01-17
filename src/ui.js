const playerGameboardDOM = document.getElementById('player-gameboard');
const comGameboardDOM = document.getElementById('com-gameboard');
const shipPlacementDOM = document.getElementById('ship-placement-container');
const shipsToPlace = document.querySelectorAll('.ship-to-place');
let divCells;
const modal = document.getElementById('modal');
const startBtn = document.getElementById('start-btn');

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

// drag and drop
function activateDragDrop(boardObj) {
  let shipLength;

  // draggable elements
  [...shipsToPlace].forEach((shipToPlace) => {
    shipToPlace.addEventListener('dragstart', () => {
      console.log('dragging started');
      shipLength = shipToPlace.getAttribute('data-length');
    });
  });

  // elements to drop draggable on
  [...divCells].forEach((divCell) => {
    divCell.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    divCell.addEventListener('drop', (e) => {
      e.preventDefault();
      console.log('drag dropped');
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
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
};
