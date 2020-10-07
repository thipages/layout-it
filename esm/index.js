import lcss from './lcss.js';
import './grid-it.js';
import './center-it.js';
import ustyler from 'ustyler';
export default (css=lcss)=> {
    ustyler(css);
};