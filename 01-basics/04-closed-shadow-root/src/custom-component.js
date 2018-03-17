(function() {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor() {
            super();

            // attach shadow root and set mode to "closed"
            this._shadowRoot = this.attachShadow({mode: 'closed'});
        }

        connectedCallback() {
            this._shadowRoot.innerHTML = `<h2>Hello closed Shadow Root Component</h2>`;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

