let _uid=Math.random();
const uid=(p="")=>(p+(_uid++)).replace('.','');
const ga=(n, k)=>n.getAttribute(k);
const norm=(s)=>s.trim().replace( /\s\s+/g, ' ' );
const getTemplateAreas=(rowNum, colNum, areas, uid)=> {
    const tuple =(arr,n)=> Array.from({ length: arr.length / n }, (_, i) => arr.slice(i * n, i * n + n));
    let p=tuple(areas.split(' '), colNum);
    let r=[];
    for (let i=0;i<p.length;i++) r.push(`'${p[i].map(v=>uid+"_"+v).join(" ")}'`);
    return [r.length===rowNum*colNum,r.join(' ')];
}
const registerChildren=(children,oKeys, uid)=> {
    for (let i=0,len=children.length;i<len;i++) {
        children[i].style['grid-area']=uid+"_"+oKeys[i];
    }
}
customElements.define(
    'grid-it',
    class extends HTMLElement {
        static get observedAttributes() { return ['areas','rows','columns']; }
        attributeChangedCallback(name, oldValue, newValue) {
            
        }
        connectedCallback() {
            let id=uid("g_");
            this.style.display = 'grid';
            let r=norm(ga(this,'rows'));
            let c=norm(ga(this,'columns'));
            let a=norm(ga(this,'areas'));
            let t=getTemplateAreas(
                r.split(' ').length,
                c.split(' ').length,
                a,
                id
            );
            if (t[0]) {
                this.style['grid-template-rows']=r;
                this.style['grid-template-columns']=c;
                this.style['grid-template-areas']=t[1];
                let st=[...new Set(t[1].split(' '))].sort();
                registerChildren(this.children,st,id);
            }
        }
    }
);