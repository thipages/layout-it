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
            attrs.forEach((v, i) => n.style['grid-template-' + v] = tv[i])
            let oKeys = [...new Set(a.split(' '))].sort();
            // Remove empty cells
            let md = oKeys.filter(v => v !== '.');
            // update children grid-area style
            for (let i = 0, len = n.children.length; i < len; i++) {
                n.children[i].style.gridArea = id + md[i];
            }
        }
    }
}
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