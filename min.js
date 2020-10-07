var layoutIt=function(){"use strict";var t="\n    html, body {\n        padding:0;\n        margin:0;\n    }\n    *, *::before, *::after {\n        box-sizing: border-box;\n    }";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){var e=a();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function p(t){return function(t){if(Array.isArray(t))return t}(t)||h(t)||d(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||h(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=Math.random(),v=function(t,e,n){var r,o=y(new Set(t.split(" "))).sort(),i=0,u=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=d(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}(e.children);try{for(u.s();!(r=u.n()).done;){r.value.style.gridArea=n+o[i],i++}}catch(t){u.e(t)}finally{u.f()}};function g(t){for(var e="string"==typeof t?[t]:[t[0]],n=1,r=arguments.length;n<r;n++)e.push(arguments[n],t[n]);var o=document.createElement("style");return o.type="text/css",o.appendChild(document.createTextNode(e.join(""))),document.head.appendChild(o)}customElements.define("grid-it",function(t){o(i,t);var n=s(i);function i(){return e(this,i),n.apply(this,arguments)}return r(i,[{key:"attributeChangedCallback",value:function(t,e,n){this.areas=n}},{key:"connectedCallback",value:function(){var t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+m++}("g_"),e=function(t,e){for(var n,r,o=p(t.split(" ")),i=o[0],u=o[1],a=o.slice(2),c=a.splice(0,i),l=a.splice(0,u),f=(n=a,r=u,Array.from({length:n.length/r},(function(t,e){return n.slice(e*r,e*r+r)}))),s=[],y=0;y<f.length;y++)s.push("'".concat(f[y].map((function(t){return e+t})).join(" "),"'"));return[a.length-l.length*c.length==0&&parseInt(i)===c.length&&parseInt(u)===l.length,{gridTemplateRows:c.join(" "),gridTemplateColumns:l.join(" "),gridTemplateAreas:s.join(" ")}]}(this.areas,t);e[0]&&(this.style.display="grid",Object.assign(this.style,e[1]),v(e[1].gridTemplateAreas,this,t))}}],[{key:"observedAttributes",get:function(){return["areas"]}}]),i}(l(HTMLElement))),customElements.define("center-it",function(t){o(i,t);var n=s(i);function i(){return e(this,i),n.apply(this,arguments)}return r(i,[{key:"connectedCallback",value:function(){this.style.display="flex",this.style.justifyContent="center",this.style.alignItems="center"}}]),i}(l(HTMLElement)));return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;g(e)}}();
