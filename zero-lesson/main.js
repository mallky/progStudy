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
    const circle = lib.createCircle({
      r: 50,
      cx: 50,
      cy: 50,
      style: 'fill: transparent; stroke: black; stroke-width: 2px;',
      id: 'first-circle'
    });

    this.svg.appendChild(circle);
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

    const text = lib.createText('HELLO WORLD!', {x: 250, y: 250});
    this.svg.appendChild(text);

    const path = lib.createPath({d: 'M150 0 L75 200 L225 200', fill: 'none', stroke: 'black'});
    this.svg.appendChild(path);

    this.createGraph(path);
  }

  transformAnimation(elem) {
    let xShift = 0, yShift = 0, degree = 0, cx = 0, cy = 0;

    const timer = setInterval(() => {
      xShift += 0.1;
      yShift += 0.1;
      degree += 0.11;
      cx += 0.1;
      cy += 0.1;

      if (degree > 180) {
        clearInterval(timer);
      }

      const animation = {
        skewX: `${cx}`,
        translate: `${xShift} ${yShift}`,
        rotate: `${degree} ${cx} ${cy}`
      };

      lib.transform(elem, animation);
    }, lib.TIMER_STEP);
  }

  createGraph(elem) {
    let path = 'M 0 0';
    let x = 0;
    let y = 0;

    const timer = setInterval(() => {
      if (x > 650) {
        elem.setAttribute('d', path + 'Z');

        clearInterval(timer);
      }

      x += 0.5;
      y = 50 * Math.sin(x / 5) + 120;
      path += ` L ${x} ${y}`;

      elem.setAttribute('d', path);
    }, lib.TIMER_STEP / 10);
  }
}