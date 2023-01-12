import returnRandomNum from './helper';

export default class Player {
  constructor(name, isComputer, isPlaying) {
    this.name = name;
    this.isComputer = isComputer;
    this.isPlaying = isPlaying;
    this.coordsAlreadyAttackedArr = [];
  }

  switchPlayer() {
    this.isPlaying = !this.isPlaying;
  }

  // eslint-disable-next-line class-methods-use-this
  playerAttack(pickedCoords) {
    this.coordsAlreadyAttackedArr.push(pickedCoords);
    return pickedCoords;
  }

  // eslint-disable-next-line class-methods-use-this
  computerAttack() {
    let randomNum = returnRandomNum();
    this.coordsAlreadyAttackedArr.push(randomNum);
    return randomNum;
  }
}
