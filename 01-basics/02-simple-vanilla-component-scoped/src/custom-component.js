// encapsulate custom component and activate strict mode
(function() {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = `<h2>Hello Scoped Web Component</h2>`;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

