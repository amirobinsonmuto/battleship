/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activateDragDrop)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n// drag and drop\nfunction activateDragDrop(boardObj) {\n  let shipLength;\n  let droppable;\n  let preventDropCellIDArr = [];\n\n  // draggable elements\n  _ui__WEBPACK_IMPORTED_MODULE_0__.shipsToPlaceArr.forEach((shipToPlace) => {\n    shipToPlace.addEventListener('dragstart', () => {\n      shipLength = shipToPlace.getAttribute('data-length');\n\n      // prevent drop when the ship length does not fit in a row\n      for (let i = 0; i < shipLength - 1; i++) {\n        let firstDigit = 9 - i;\n        for (let k = 0; k <= 9; k++) {\n          preventDropCellIDArr.push('player' + parseInt(`${k}${firstDigit}`));\n        }\n      }\n\n      // // prevent drop when the ship overlaps with no drop zone\n      // if (document.getElementById(id).classList.contains('prevent-drop-surrounding');)\n\n      preventDropCellIDArr.forEach((id) => {\n        document.getElementById(id).classList.add('prevent-drop');\n      });\n    });\n\n    shipToPlace.addEventListener('dragend', () => {\n      if (droppable) {\n        shipToPlace.classList.add('hidden');\n        if (_ui__WEBPACK_IMPORTED_MODULE_0__.shipsToPlaceArr.every((el) => el.classList.contains('hidden'))) {\n          (0,_ui__WEBPACK_IMPORTED_MODULE_0__.displayStartGameBtn)();\n        }\n      }\n\n      // reset - prevent drops when the ship length does not fit in a row\n      preventDropCellIDArr.forEach((id) => {\n        document.getElementById(id).classList.remove('prevent-drop');\n      });\n      preventDropCellIDArr = [];\n    });\n  });\n\n  // disable drop outside of player board\n  _ui__WEBPACK_IMPORTED_MODULE_0__.playerGameboardDOM.addEventListener('dragover', () => {\n    droppable = true;\n  });\n\n  _ui__WEBPACK_IMPORTED_MODULE_0__.playerGameboardDOM.addEventListener('dragleave', () => {\n    droppable = false;\n  });\n\n  // elements to drop draggable on\n  [..._ui__WEBPACK_IMPORTED_MODULE_0__.divCells].forEach((divCell) => {\n    divCell.addEventListener('dragover', (e) => {\n      if (\n        !divCell.classList.contains('prevent-drop') &&\n        !divCell.classList.contains('prevent-drop-surrounding')\n      ) {\n        e.preventDefault();\n      }\n    });\n\n    divCell.addEventListener('drop', (e) => {\n      e.preventDefault();\n      const coords = parseInt(divCell.getAttribute('data'));\n      const length = parseInt(shipLength);\n\n      boardObj.placeShip(coords, length);\n\n      if (\n        coords + length - 1 === 19 ||\n        coords + length - 1 === 29 ||\n        coords + length - 1 === 39 ||\n        coords + length - 1 === 49 ||\n        coords + length - 1 === 59 ||\n        coords + length - 1 === 69 ||\n        coords + length - 1 === 79 ||\n        coords + length - 1 === 89\n      ) {\n        for (let i = coords - 1; i < coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i - 10}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (\n        coords === 10 ||\n        coords === 20 ||\n        coords === 30 ||\n        coords === 40 ||\n        coords === 50 ||\n        coords === 60 ||\n        coords === 70 ||\n        coords === 80\n      ) {\n        for (let i = coords; i <= coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i - 10}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (coords > 0 && coords + length - 1 < 9) {\n        for (let i = coords - 1; i <= coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (coords === 0) {\n        for (let i = coords; i <= coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (coords + length - 1 === 9) {\n        for (let i = coords - 1; i < coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (coords === 90) {\n        for (let i = coords; i <= coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i - 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else if (coords + length - 1 === 99) {\n        for (let i = coords - 1; i < coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i - 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      } else {\n        for (let i = coords - 1; i <= coords + length; i++) {\n          document\n            .getElementById(`player${i}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i - 10}`)\n            .classList.add('prevent-drop-surrounding');\n          document\n            .getElementById(`player${i + 10}`)\n            .classList.add('prevent-drop-surrounding');\n        }\n      }\n\n      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.displayPlacedShips)(boardObj);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://battleship/./src/drag-and-drop.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.shipObjArr = [];\n    this.hitCoordsArr = [];\n    this.missedCoordsArr = [];\n  }\n\n  placeShip(coords, length) {\n    this.shipObjArr.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](coords, length));\n  }\n\n  receiveAttack(attackedCoords) {\n    this.shipObjArr.forEach((ship) => {\n      if (ship.coordsArr.some((coords) => coords === attackedCoords)) {\n        ship.hit();\n        this.hitCoordsArr.push(attackedCoords);\n      }\n    });\n    if (!this.hitCoordsArr.some((coords) => coords === attackedCoords)) {\n      this.missedCoordsArr.push(attackedCoords);\n    }\n  }\n\n  checkIfAllSunk() {\n    return this.shipObjArr.every((ship) => ship.isSunk() === true);\n  }\n\n  deleteShips() {\n    this.shipObjArr = [];\n    this.hitCoordsArr = [];\n    this.missedCoordsArr = [];\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-and-drop */ \"./src/drag-and-drop.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n\nfunction game() {\n  // create new objects\n  const playerGameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const comGameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  function startGame() {\n    // reset and prepare the initial UI\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.hideModal)();\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.removeChild)(_ui__WEBPACK_IMPORTED_MODULE_3__.playerGameboardDOM);\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.removeChild)(_ui__WEBPACK_IMPORTED_MODULE_3__.comGameboardDOM);\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.generateUI)();\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.resetShipsToPlace)();\n    playerGameBoard.deleteShips();\n    comGameBoard.deleteShips();\n\n    // create Ships\n    (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerGameBoard);\n    comGameBoard.placeShip(21, 5);\n    comGameBoard.placeShip(31, 4);\n    comGameBoard.placeShip(42, 3);\n    comGameBoard.placeShip(84, 2);\n    comGameBoard.placeShip(55, 1);\n  }\n\n  function gameLoop() {\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.toggleNoClick)(_ui__WEBPACK_IMPORTED_MODULE_3__.playerGameboardDOM);\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.toggleNoClick)(_ui__WEBPACK_IMPORTED_MODULE_3__.comGameboardDOM);\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.removePreventDropClass)();\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.hide)(_ui__WEBPACK_IMPORTED_MODULE_3__.startBtn);\n\n    const playerA = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('A', false, true);\n    const playerCom = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Com', true, false);\n\n    _ui__WEBPACK_IMPORTED_MODULE_3__.divCells.forEach((cell) => {\n      cell.addEventListener('click', () => {\n        const coords = parseInt(cell.getAttribute('data'));\n        playerA.playerAttack(coords);\n        comGameBoard.receiveAttack(coords);\n        if (comGameBoard.checkIfAllSunk()) {\n          (0,_ui__WEBPACK_IMPORTED_MODULE_3__.displayWinner)('Player A');\n        }\n        (0,_ui__WEBPACK_IMPORTED_MODULE_3__.displayHitOrMiss)(comGameBoard, 'com');\n\n        // computer play\n        const attackedCoords = playerCom.computerAttack();\n        playerGameBoard.receiveAttack(attackedCoords);\n        if (playerGameBoard.checkIfAllSunk()) {\n          (0,_ui__WEBPACK_IMPORTED_MODULE_3__.displayWinner)('Computer');\n        }\n        (0,_ui__WEBPACK_IMPORTED_MODULE_3__.displayHitOrMiss)(playerGameBoard, 'player');\n      });\n    });\n  }\n\n  startGame();\n  _ui__WEBPACK_IMPORTED_MODULE_3__.startBtn.addEventListener('click', gameLoop);\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameloop.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnRandomNum)\n/* harmony export */ });\nfunction shuffleArray(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    let j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}\n\nfunction returnRandomNum() {\n  let arr = [...Array(90).keys()];\n  return shuffleArray(arr).pop();\n}\n\n\n//# sourceURL=webpack://battleship/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ \"./src/gameloop.js\");\n\n\n(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nclass Player {\n  constructor(name, isComputer, isPlaying) {\n    this.name = name;\n    this.isComputer = isComputer;\n    this.isPlaying = isPlaying;\n    this.coordsAlreadyAttackedArr = [];\n  }\n\n  // switchPlayer() {\n  //   this.isPlaying = !this.isPlaying;\n  // }\n\n  // eslint-disable-next-line class-methods-use-this\n  playerAttack(pickedCoords) {\n    this.coordsAlreadyAttackedArr.push(pickedCoords);\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  computerAttack() {\n    let randomNum = (0,_helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    this.coordsAlreadyAttackedArr.push(randomNum);\n    return randomNum;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(startCoords, length) {\n    this.length = length;\n    this.hitNum = 0;\n    this.startCoords = startCoords;\n    this.coordsArr = this.calculateCoords();\n  }\n\n  calculateCoords() {\n    // eslint-disable-next-line no-plusplus\n    const coordsArr1 = [];\n    for (let i = 0; i < this.length; i++) {\n      coordsArr1.push(this.startCoords + i);\n    }\n    return coordsArr1;\n  }\n\n  hit() {\n    this.hitNum += 1;\n  }\n\n  isSunk() {\n    return this.length === this.hitNum;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comGameboardDOM\": () => (/* binding */ comGameboardDOM),\n/* harmony export */   \"displayHitOrMiss\": () => (/* binding */ displayHitOrMiss),\n/* harmony export */   \"displayPlacedShips\": () => (/* binding */ displayPlacedShips),\n/* harmony export */   \"displayStartGameBtn\": () => (/* binding */ displayStartGameBtn),\n/* harmony export */   \"displayWinner\": () => (/* binding */ displayWinner),\n/* harmony export */   \"divCells\": () => (/* binding */ divCells),\n/* harmony export */   \"generateUI\": () => (/* binding */ generateUI),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"hideModal\": () => (/* binding */ hideModal),\n/* harmony export */   \"isAllShipsPlaced\": () => (/* binding */ isAllShipsPlaced),\n/* harmony export */   \"playerGameboardDOM\": () => (/* binding */ playerGameboardDOM),\n/* harmony export */   \"removeChild\": () => (/* binding */ removeChild),\n/* harmony export */   \"removePreventDropClass\": () => (/* binding */ removePreventDropClass),\n/* harmony export */   \"resetShipsToPlace\": () => (/* binding */ resetShipsToPlace),\n/* harmony export */   \"shipsToPlaceArr\": () => (/* binding */ shipsToPlaceArr),\n/* harmony export */   \"startBtn\": () => (/* binding */ startBtn),\n/* harmony export */   \"startOverBtn\": () => (/* binding */ startOverBtn),\n/* harmony export */   \"toggleNoClick\": () => (/* binding */ toggleNoClick)\n/* harmony export */ });\nconst playerGameboardDOM = document.getElementById('player-gameboard');\nconst comGameboardDOM = document.getElementById('com-gameboard');\nconst instructionPlaceShips = document.getElementById(\n  'instruction-place-ships'\n);\nconst shipsToPlace = document.querySelectorAll('.ship-to-place');\nconst shipsToPlaceArr = [...shipsToPlace];\nlet divCells;\nconst modal = document.getElementById('modal');\nconst modalContent = document.getElementById('modal-content');\nconst modalMessage = document.getElementById('modal-message');\nconst startBtn = document.getElementById('start-button');\nconst startOverBtn = document.getElementById('start-btn');\nlet isAllShipsPlaced;\n\n// generate the initial UI\nfunction generateUI() {\n  for (let i = 0; i <= 9; i++) {\n    const divRow = document.createElement('div');\n    divRow.setAttribute('id', `row${i}`);\n    divRow.classList.add('divRow');\n    playerGameboardDOM.appendChild(divRow);\n\n    for (let k = 0; k <= 9; k++) {\n      const divCell = document.createElement('div');\n      divRow.appendChild(divCell);\n      const id = parseInt(`${i}${k}`);\n      divCell.setAttribute('data', id);\n      divCell.setAttribute('id', 'player' + id);\n      divCell.classList.add('divCell');\n    }\n  }\n\n  for (let i = 0; i <= 9; i++) {\n    const divRow = document.createElement('div');\n    divRow.setAttribute('id', `row${i}`);\n    divRow.classList.add('divRow');\n    comGameboardDOM.appendChild(divRow);\n\n    for (let k = 0; k <= 9; k++) {\n      const divCell = document.createElement('div');\n      divRow.appendChild(divCell);\n      const id = parseInt(`${i}${k}`);\n      divCell.setAttribute('data', id);\n      divCell.setAttribute('id', 'com' + id);\n      divCell.classList.add('divCell');\n    }\n  }\n\n  divCells = document.querySelectorAll('.divCell');\n}\n\nfunction resetShipsToPlace() {\n  shipsToPlaceArr.forEach((shipToPlace) => {\n    shipToPlace.classList.remove('hidden');\n  });\n}\n\n// display hit, miss, or sunk\nfunction displayHitOrMiss(obj, playerOrCom) {\n  obj.hitCoordsArr.forEach((e) => {\n    document.getElementById(playerOrCom + e).classList.add('hit');\n  });\n\n  obj.missedCoordsArr.forEach((e) => {\n    document.getElementById(playerOrCom + e).classList.add('missed');\n  });\n\n  obj.shipObjArr.forEach((ship) => {\n    if (ship.isSunk()) {\n      ship.coordsArr.forEach((e) => {\n        document.getElementById(playerOrCom + e).classList.add('sunk');\n      });\n    }\n  });\n}\n\n// display the winner in a modal\nfunction displayWinner(winnerName) {\n  modalMessage.textContent = `${winnerName} wins!`;\n  modal.classList.remove('hidden');\n}\n\n// hide modal\nfunction hideModal() {\n  modal.classList.add('hidden');\n  modal.removeChild(modal.lastChild);\n}\n\n// helper function to remove all children under an element\nfunction removeChild(el) {\n  while (el.firstChild) {\n    el.removeChild(el.firstChild);\n  }\n}\n\n// display placed ships\nfunction displayPlacedShips(obj) {\n  obj.shipObjArr.forEach((ship) => {\n    ship.coordsArr.forEach((e) => {\n      document.getElementById('player' + e).classList.add('ship');\n    });\n  });\n}\n\nfunction displayStartGameBtn() {\n  startBtn.classList.remove('hidden');\n  instructionPlaceShips.classList.add('hidden');\n}\n\nfunction toggleNoClick(obj) {\n  obj.classList.toggle('no-click');\n}\n\nfunction removePreventDropClass() {\n  const preventDropSurroundingElements = document.querySelectorAll(\n    '.prevent-drop-surrounding'\n  );\n  preventDropSurroundingElements.forEach((el) => {\n    el.classList.remove('prevent-drop-surrounding');\n  });\n}\n\nfunction hide(obj) {\n  obj.classList.add('hidden');\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;