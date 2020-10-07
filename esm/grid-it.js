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
}
const gridAreas=(t,parent,uid)=> {
    let st=[...new Set(t.split(" "))].sort();
    let children=parent.children;
    let i=0;
    for (let c of children) {
        c.style.gridArea=uid+st[i];
        i++;
    }
}
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