import './grid-it.js';
import './center-it.js';
// https://css-tricks.com/box-sizing/
import ustyler from 'ustyler';
ustyler(`
html, *, *:before, *:after {
      box-sizing: border-box;
      margin:0;
      padding:0;
}`);