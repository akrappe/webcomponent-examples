(function() {
    'use strict';

    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {

        constructor() {
            super();

            // do NOT attach shadow dom to this custom element!!!
            // this.attachShadow({mode: 'open'});
            this.template = currentDocument.querySelector('template#custom-component');
        }

        connectedCallback() {
            const clonedTemplate = document.importNode(this.template.content, true);

            // append child directly to this element, NOT to any shadow dom
            this.appendChild(clonedTemplate);
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

