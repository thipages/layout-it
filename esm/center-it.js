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