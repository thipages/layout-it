import './grid-it.js';
import './center-it.js';
import './isolate-it.js'
import './row-it.js'
import './column-it.js'

import ustyler from 'ustyler';

// https://css-tricks.com/box-sizing/

ustyler(`
html, *, *:before, *:after {
      box-sizing: border-box;
      margin:0;
      padding:0;
}`);