customElements.define(
    'isolate-it',
    class extends HTMLElement {
        connectedCallback() {
            this.style.marginLeft = 'auto';
            this.style.marginRight = 'auto';
        }
    }
);