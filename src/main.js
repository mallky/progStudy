import './main.scss';
import SvgWork from '../zero-lesson/main';

const toTestBtn = document.querySelector('#to-test');
const toLessonsBtn = document.querySelector('#to-lessons');

class ProgStudy {
  constructor() {
    this.toTestBtn = document.querySelector('#to-test');
    this.toLessonsBtn = document.querySelector('#to-lessons');
    this.first = document.querySelector('#first');
    this.lessons = document.querySelector('#lessons');
    this.zeroLesson = document.querySelector('#zero-lesson');
  }
  
  init() {
    this.lessons.style.display = 'none';
    this.zeroLesson.style.display = 'none';

    this.toTestBtn.addEventListener('click', this.toTest.bind(this));
    this.toLessonsBtn.addEventListener('click', this.toLessons.bind(this));
  }

  toTest() {
    this.zeroLesson.style.display = '';
    this.hideFirstPage();

    const svgWork = new SvgWork();

    svgWork.init();
  }

  toLessons() {
    this.lessons.style.display = '';
    this.hideFirstPage();
  }

  hideFirstPage() {
    this.first.style.display = 'none';
  }
}

const study = new ProgStudy();

study.init();
