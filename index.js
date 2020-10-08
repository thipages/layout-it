let _uid=Math.random();
const uid=(p="")=>p+(_uid++);
const getAttribute=(n, k)=>n.getAttribute(k);
const setAttribute=(n, k, v)=>n.setAttribute(k,v);
const norm=(s)=>s.trim().replace( /\s\s+/g, ' ' );
const getTemplateAreas=(rowNum, colNum, areas, uid)=> {
    const tuple =(arr,n)=> Array.from({ length: arr.length / n }, (_, i) => arr.slice(i * n, i * n + n));    let p=tuple(areas.split(' '), colNum);
    let r=[];
    for (let i=0;i<p.length;i++) r.push(`'${p[i].map(v=>uid+'_'+v).join(" ")}'`);
    return [r.length===rowNum*colNum,r.join(' ')];
};
const registerChildren=(t, parent, uid)=> {
    let st=[...new Set(t.split(" "))].sort();
    let children=parent.children;
    let i=0;
    for (let c of children) {
        c.style.gridArea=uid+st[i];
        i++;
    }
};
customElements.define(
    'grid-it',
    class extends HTMLElement {
        static get observedAttributes() { return ['areas','rows','columns']; }
        attributeChangedCallback(name, oldValue, newValue) {
            let nv=norm(newValue);
            setAttribute(this,'name',nv);
            if (name==='rows' || name==='columns') setAttribute(this,'grid-template-'+name,nv);
        }
        connectedCallback() {
            let id=uid("g_");
            let t=getTemplateAreas(
                getAttribute(this,'rows').split(' ').length,
                getAttribute(this,'columns').split(' ').length,
                getAttribute(this,'areas'),id
            );
            this.style.display = 'grid';
            if (t[0]) {
                setAttribute(this,'grid-template-areas',t[1]);
                registerChildren(t[1], this,id);
            }
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
    html, body {
        padding:0;
        margin:0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }`
);
