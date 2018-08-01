import lib from 'lib';

export default class SvgWork {
  constructor() {
    this.svg = document.querySelector('#svg');
  }
  
  init() {
    const mainField = lib.createRect({
      width: this.svg.getAttribute('width'),
      height: this.svg.getAttribute('height'),
      x: 0,
      y: 0,
      style: 'fill: #DEDEDE; stroke: black;'
    });

    this.svg.appendChild(mainField);
    this.mainFunc();
  }
  
  mainFunc() {
    const rect = lib.createRect({
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      style: 'fill: red; stroke: black; stroke-width: 2px;'
    });

    this.svg.appendChild(rect);
    lib.animate(rect, {x: 100, y: 350}, 500);
  }
}