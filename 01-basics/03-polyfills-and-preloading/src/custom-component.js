(function() {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = `<h2>Hello Custom Component (loading time: ${ Date.now() - window.startingTime }ms)</h2>`;
        }
    }

    if (!window.customElements.get('custom-component')) {
        window.customElements.define('custom-component', CustomComponent);
    }
})();

