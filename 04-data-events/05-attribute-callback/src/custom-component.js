(function () {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor(...args) {
            super(...args);
            this.attachShadow({mode: 'open'});
        }

        // observe attribute name
        static get observedAttributes() {
            return ['name'];
        }

        // listen to changed attributes and re-render view
        attributeChangedCallback() {
            this.render();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            this.shadowRoot.innerHTML = `<h1>Hello ${this.getAttribute('name')}</h1>`;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

