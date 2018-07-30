import './main.scss';
import lib from 'lib';

const svg = document.getElementById('svg');
const play = document.getElementById('play-anim');

const optRect = {
  width: 20,
  height: 20,
  x: 20,
  y: 20
};

const rect = lib.createElement('rect', optRect);

svg.appendChild(rect);

const optCircle = {
  cx: 250,
  cy: 150,
  r: 100
};
const circle = lib.createElement('circle', optCircle);

svg.appendChild(circle);

play.addEventListener('click', () => {
  lib.animate(circle, {x: 350, y: 550}, 10);
});
