(function() {
    'use strict';

    // use currentScript from Polyfill or native implementation
    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({mode: 'open'});

            // select template for later cloning
            this.template = currentDocument.querySelector('template#custom-component');
        }

        connectedCallback() {
            // deep clone template and append to shadow root
            const clonedTemplate = document.importNode(this.template.content, true);
            this.shadowRoot.appendChild(clonedTemplate);
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

