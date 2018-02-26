(function() {
    'use strict';

    class PreloadComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = `<h2>Hello Preload Component (loading time: ${ Date.now() - window.startingTime }ms)</h2>`;
        }
    }

    if (!window.customElements.get('preload-component')) {
        window.customElements.define('preload-component', PreloadComponent);
    }
})();

