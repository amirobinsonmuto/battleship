import {
  playerGameboardDOM,
  divCells,
  displayStartGameBtn,
  shipsToPlaceArr,
  displayPlacedShips,
} from './ui';

// drag and drop
export default function activateDragDrop(boardObj) {
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
      if (
        !divCell.classList.contains('prevent-drop') &&
        !divCell.classList.contains('prevent-drop-surrounding')
      ) {
        e.preventDefault();
      }
    });

    divCell.addEventListener('drop', (e) => {
      e.preventDefault();
      const coords = parseInt(divCell.getAttribute('data'));
      const length = parseInt(shipLength);

      boardObj.placeShip(coords, length);
      if (Array.from(String(coords + length - 1), Number)[1] === 9) {
        console.log('this is working');
        for (let i = coords - 1; i < coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i - 10}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i + 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      } else {
        for (let i = coords - 1; i <= coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i - 10}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i + 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      }

      displayPlacedShips(boardObj);
    });
  });
}
