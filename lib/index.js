const createElement = (tag, opt = {}) => {
  const elem = document.createElementNS('http://www.w3.org/2000/svg', tag);

  Object.keys(opt).forEach(key => {
    elem.setAttribute(key, opt[key]);
  });

  return elem;
};

const createRect = (opt) => {
  return createElement('rect', opt);
};

const createCircle = (opt) => {
  return createElement('circle', opt);
};

const createLine = (opt) => {
  return createElement('line', opt);
};

const createText = (opt) => {
  return createElement('text', opt);
};

const createPath = (opt) => {
  return createElement('path', opt);
};

const createPolygon = (opt) => {

};

const wrapElems = (elems) => {
  const gWrap = createElement('g');

  elems.forEach(elem => {
    gWrap.appendChild(elem);
  });
};

const hide = (elem) => {
  elem.style.visibility = 'hidden';
};

const show = (elem) => {
  elem.style.visibility = 'visible';
};

const animate = (element, to, time) => {
  const from = {
    x: +element.getAttribute('x') || +element.getAttribute('cx'),
    y: +element.getAttribute('x') || +element.getAttribute('cy')
  };
  const step = {
    dx: to.x ? (to.x - from.x) / time : 0,
    dy: to.y ? (to.y - from.y) / time : 0
  };

  let _x = from.x,
    _y = from.y;

  const timer = setInterval(() => {
    if (_x >= to.x) {
      clearInterval(timer);

      element.setAttribute('x', to.x);
      element.setAttribute('y', to.y);

      return false;
    }

    _x += step.dx;
    _y += step.dy;

    element.setAttribute('x', _x);
    element.setAttribute('y', _y);
  }, 10);
};

export default {
  createElement,
  createRect,
  createCircle,
  createLine,
  createPath,
  createText,
  createPolygon,
  hide,
  show,
  wrapElems,
  animate
}
