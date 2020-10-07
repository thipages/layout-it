var lcss = `
    html, body {
        padding:0;
        margin:0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }`;

let _uid=Math.random();
const uid=(p="")=>p+(_uid++);

const getTemplate=(s, uid)=> {
    const tuple =(arr,n)=> Array.from({ length: arr.length / n }, (_, i) => arr.slice(i * n, i * n + n));
    let [rowNum,colNum,...rest]=s.split(" ");
    let fRows=rest.splice(0,rowNum);
    let fCols=rest.splice(0,colNum);
    let p=tuple(rest, colNum);
    let r=[];
    for (let i=0;i<p.length;i++) r.push(`'${p[i].map(v=>uid+v).join(" ")}'`);
    return [
        rest.length-fCols.length*fRows.length===0 &&
        parseInt(rowNum)===fRows.length &&
        parseInt(colNum)===fCols.length,
        {
            gridTemplateRows:fRows.join(" "),
            gridTemplateColumns:fCols.join(" "),
            gridTemplateAreas:r.join(" "),
        }
    ];
};
const gridAreas=(t,parent,uid)=> {
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
        static get observedAttributes() { return ['areas']; }
        attributeChangedCallback(name, oldValue, newValue) {
            this.areas = newValue;
        }
        connectedCallback() {
            let id=uid("g_");
            let t=getTemplate(this.areas,id);
            if (t[0]) {
                this.style.display = 'grid';
                Object.assign(this.style, t[1]);
                gridAreas(t[1].gridTemplateAreas, this,id);
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

var index = (css=lcss)=> {
    ustyler(css);
};

export default index;
