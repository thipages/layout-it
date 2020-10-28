let _uid=Math.random();
const uid=(p="")=>(p+(_uid++)).replace('.','');
const ga=(n, k)=>n.getAttribute(k);
const norm=(s)=>s.trim().replace( /\s\s+/g, ' ' );
const valid=(s)=>s && s!=="";
const attrs=['rows','columns','areas'];
const getTemplateAreas=(rowNum, colNum, areas, uid)=> {
    const rows =(arr,n)=> Array.from({ length: arr.length / n }, (_, i) => arr.slice(i * n, i * n + n));
    let p=rows(areas.split(' '), colNum);
    let r=[];
    // todo : it van be a series of dots, not only one
    for (let i=0;i<p.length;i++) r.push(`'${p[i].map(v=>v==='.'?v:uid+v).join(" ")}'`);
    return r.join(' ');
};
const update=(n)=> {
    if (attrs.filter(v=>!valid(ga(n,v))).length===0) {
        let id = uid("g_");
        let [r, c, a] = attrs.map(v => norm(ga(n, v)));
        let [lr, lc, la] = [r, c, a].map(v => v.split(' ').length);
        // check if areas=rows*cols
        if (la === lr * lc) {
            let t = getTemplateAreas(lr, lc, a, id);
            let tv = [r, c, t];
            // populate grid-template-(rows/columns/areas) container style
            attrs.forEach((v, i) => n.style['grid-template-' + v] = tv[i]);
            let oKeys = [...new Set(a.split(' '))].sort();
            // Remove empty cells
            let md = oKeys.filter(v => v !== '.');
            // update children grid-area style
            for (let i = 0, len = n.children.length; i < len; i++) {
                n.children[i].style.gridArea = id + md[i];
            }
        }
    }
};
customElements.define(
    'grid-it',
    class extends HTMLElement {
        // add an exclude area attribute for hiding children(display:none)
        static get observedAttributes() { return attrs; }
        attributeChangedCallback() {
            update(this);
        }
        connectedCallback() {
            this.style.display = 'grid';
        }
    }
);

customElements.define(
    'center-it',
    class extends HTMLElement {
        connectedCallback() {
            this.style.display = 'flex';
            this.style.justifyContent = 'center';
            this.style.alignItems = 'center';
        }
    }
);

customElements.define(
    'isolate-it',
    class extends HTMLElement {
        connectedCallback() {
            this.style.marginLeft = 'auto';
            this.style.marginRight = 'auto';
        }
    }
);

customElements.define(
    'row-it',
    class extends HTMLElement {
        static get observedAttributes() { return ['justify-content','align-items']; }
        attributeChangedCallback(name, oldValue, newValue) {
            this.style[name] = newValue;
        }
        connectedCallback() {
            this.style.display = 'flex';
            this.style.flexDirection = 'row';
        }
    }
);

customElements.define(
    'column-it',
    class extends HTMLElement {
        static get observedAttributes() { return ['justify-content','align-items']; }
        attributeChangedCallback(name, oldValue, newValue) {
            this.style[name] = newValue;
        }
        connectedCallback() {
            this.style.display = 'flex';
            this.style.flexDirection = 'column';
        }
    }
);

const attrs$1= {
    P100: ()=>({height:'100%', width:'100%'}),
    V100: ()=>({height:'100vh', width:'100vw'}),
    'center-it':()=>({display:'flex','justify-content':'center','align-items':'center'})
};
customElements.define('style-it',class extends HTMLElement{
    connectedCallback() {
        this.getAttributeNames().forEach(v=>{
            if (v in attrs$1) {
                this.style[v]=Object.entries(attrs$1[v](this.getAttribute(v))).forEach(
                    ([k,v])=>this.style[k]=v
                );
                console.log('cust',v);
            } else
                if (v in this.style) this.style[v]=this.getAttribute(v);
        });
    }
});

/**
 * Create, append, and return, a style node with the passed CSS content.
 * @param {string|string[]} template the CSS text or a template literal array.
 * @param {...any} values the template literal interpolations.
 * @return {HTMLStyleElement} the node appended as head last child.
 */
function ustyler(template) {
  const text = typeof template == 'string' ? [template] : [template[0]];
  for (let i = 1, {length} = arguments; i < length; i++)
    text.push(arguments[i], template[i]);
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(text.join('')));
  return document.head.appendChild(style);
}

ustyler(`
html, *, *:before, *:after {
      box-sizing: border-box;
      margin:0;
      padding:0;
}`);
