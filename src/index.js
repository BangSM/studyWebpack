// lodash를 모듈로 가져오는 방법 : CommonJS 스펙
// var _ = require('lodash')

// es6 방식의 모듈 가져오는 방법 : import
import _ from 'lodash';
import "./style.css"
import "./Hello.scss"
import {area , circumference} from './js/circle' 
import cube from './js/cube'

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
console.log(area(10))
console.log(circumference(5))
console.log(cube(20))