!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=u();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=Math.random(),b=function(t,e){return t.getAttribute(e)},m=["rows","columns","areas"],v=function(t){if(0===m.filter((function(e){return!((n=b(t,e))&&""!==n);var n})).length){var e=function(){return((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+d++).replace(".","")}("g_"),n=s(m.map((function(e){return b(t,e).trim().replace(/\s\s+/g," ")})),3),r=n[0],i=n[1],o=n[2],u=s([r,i,o].map((function(t){return t.split(" ").length})),3),c=u[0],a=u[1];if(u[2]===c*a){var l=function(t,e,n,r){for(var i,o,u=(i=n.split(" "),o=e,Array.from({length:i.length/o},(function(t,e){return i.slice(e*o,e*o+o)}))),c=[],a=0;a<u.length;a++)c.push("'".concat(u[a].map((function(t){return"."===t?t:r+t})).join(" "),"'"));return c.join(" ")}(0,a,o,e),f=[r,i,l];m.forEach((function(e,n){return t.style["grid-template-"+e]=f[n]}));for(var p=y(new Set(o.split(" "))).sort().filter((function(t){return"."!==t})),h=0,v=t.children.length;h<v;h++)t.children[h].style.gridArea=e+p[h]}}};customElements.define("grid-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"attributeChangedCallback",value:function(){v(this)}},{key:"connectedCallback",value:function(){this.style.display="grid"}}],[{key:"observedAttributes",get:function(){return m}}]),o}(a(HTMLElement))),customElements.define("center-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"connectedCallback",value:function(){this.style.display="flex",this.style.justifyContent="center",this.style.alignItems="center"}}]),o}(a(HTMLElement))),customElements.define("isolate-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"connectedCallback",value:function(){this.style.marginLeft="auto",this.style.marginRight="auto"}}]),o}(a(HTMLElement))),customElements.define("row-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"attributeChangedCallback",value:function(t,e,n){this.style[t]=n}},{key:"connectedCallback",value:function(){this.style.display="flex",this.style.flexDirection="row"}}],[{key:"observedAttributes",get:function(){return["justify-content","align-items"]}}]),o}(a(HTMLElement))),customElements.define("column-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"attributeChangedCallback",value:function(t,e,n){this.style[t]=n}},{key:"connectedCallback",value:function(){this.style.display="flex",this.style.flexDirection="column"}}],[{key:"observedAttributes",get:function(){return["justify-content","align-items"]}}]),o}(a(HTMLElement)));var g={P100:function(){return{height:"100%",width:"100%"}},V100:function(){return{height:"100vh",width:"100vw"}},"center-it":function(){return{display:"flex","justify-content":"center","align-items":"center"}}};customElements.define("style-it",function(e){r(o,e);var i=f(o);function o(){return t(this,o),i.apply(this,arguments)}return n(o,[{key:"connectedCallback",value:function(){var t=this;this.getAttributeNames().forEach((function(e){e in g?(t.style[e]=Object.entries(g[e](t.getAttribute(e))).forEach((function(e){var n=s(e,2),r=n[0],i=n[1];return t.style[r]=i})),console.log("cust",e)):e in t.style&&(t.style[e]=t.getAttribute(e))}))}}]),o}(a(HTMLElement))),function(t){for(var e="string"==typeof t?[t]:[t[0]],n=1,r=arguments.length;n<r;n++)e.push(arguments[n],t[n]);var i=document.createElement("style");i.type="text/css",i.appendChild(document.createTextNode(e.join(""))),document.head.appendChild(i)}("\nhtml, *, *:before, *:after {\n      box-sizing: border-box;\n      margin:0;\n      padding:0;\n}")}();
