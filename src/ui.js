const playerGameboardDOM = document.getElementById('player-gameboard');
const comGameboardDOM = document.getElementById('com-gameboard');
let divCells;
const modal = document.getElementById('modal');
const startBtn = document.getElementById('start-btn');

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

function switchUserUI(obj1, obj2) {
  playerGameboardDOM.classList.toggle('being-attacked');
  comGameboardDOM.classList.toggle('being-attacked');
}

function displayShip(obj) {
  obj.shipObjArr.forEach((ship) => {
    ship.coordsArr.forEach((e) => {
      document.getElementById('player' + e).classList.add('ship');
    });
  });
}

function displayWinner(winnerName) {
  const winnerNameP = document.createElement('p');
  winnerNameP.textContent = `${winnerName} wins!`;
  modal.appendChild(winnerNameP);
  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}

function removeChild(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

export {
  generateUI,
  displayHitOrMiss,
  switchUserUI,
  displayShip,
  displayWinner,
  removeChild,
  hideModal,
  playerGameboardDOM,
  comGameboardDOM,
  divCells,
  startBtn,
};
