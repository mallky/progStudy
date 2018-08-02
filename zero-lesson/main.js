import lib from 'lib';
import './style.scss';

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
      style: 'fill: red; stroke: black; stroke-width: 2px;',
      class: 'rounding',
      id: 'first-rect'
    });
    const circle = lib.createCircle({
      r: 50,
      cx: 50,
      cy: 50,
      style: 'fill: transparent; stroke: black; stroke-width: 2px;',
      class: 'rounding',
      id: 'first-circle'
    });

    this.svg.appendChild(rect);
    this.svg.appendChild(circle);

    lib.animate(rect, {x: 100, y: 350}, 500);
    lib.animate(circle, {x: 100, y: 350}, 500);


    const rect2 = lib.createRect({
      width: 100,
      height: 100,
      x: 100,
      y: 90,
      style: 'fill: blue; stroke: black; stroke-width: 2px;'
    });
    
    this.svg.appendChild(rect2);

    this.transformAnimation(rect2);
  }

  transformAnimation(elem) {
    let xShift = 0, yShift = 0, degree = 0, cx = 0, cy = 0;

    const timer = setInterval(() => {
      xShift += 0.1;
      yShift += 0.1;
      degree += 0.11;
      cx += 0.1;
      cy += 0.1;

      if (degree > 380) {
        clearInterval(timer);
      }

      const animation = {
        translate: `${xShift} ${yShift}`,
        rotate: `${degree} ${cx} ${cy}`
      };

      lib.transform(elem, animation);
    }, lib.TIMER_STEP);
  }
}