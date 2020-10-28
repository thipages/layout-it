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