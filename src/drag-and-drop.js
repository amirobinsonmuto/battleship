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

      // prevent drop when the ship length does not fit in a row
      for (let i = 0; i < shipLength - 1; i++) {
        let firstDigit = 9 - i;
        for (let k = 0; k <= 9; k++) {
          preventDropCellIDArr.push('player' + parseInt(`${k}${firstDigit}`));
        }
      }

      // // prevent drop when the ship overlaps with no drop zone
      // if (document.getElementById(id).classList.contains('prevent-drop-surrounding');)

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

      if (
        coords + length - 1 === 19 ||
        coords + length - 1 === 29 ||
        coords + length - 1 === 39 ||
        coords + length - 1 === 49 ||
        coords + length - 1 === 59 ||
        coords + length - 1 === 69 ||
        coords + length - 1 === 79 ||
        coords + length - 1 === 89
      ) {
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
      } else if (
        coords === 10 ||
        coords === 20 ||
        coords === 30 ||
        coords === 40 ||
        coords === 50 ||
        coords === 60 ||
        coords === 70 ||
        coords === 80
      ) {
        for (let i = coords; i <= coords + length; i++) {
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
      } else if (coords > 0 && coords + length - 1 < 9) {
        for (let i = coords - 1; i <= coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i + 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      } else if (coords === 0) {
        for (let i = coords; i <= coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i + 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      } else if (coords + length - 1 === 9) {
        for (let i = coords - 1; i < coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i + 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      } else if (coords === 90) {
        for (let i = coords; i <= coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i - 10}`)
            .classList.add('prevent-drop-surrounding');
        }
      } else if (coords + length - 1 === 99) {
        for (let i = coords - 1; i < coords + length; i++) {
          document
            .getElementById(`player${i}`)
            .classList.add('prevent-drop-surrounding');
          document
            .getElementById(`player${i - 10}`)
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
