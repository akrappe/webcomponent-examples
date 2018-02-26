(function() {
    'use strict';

    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({mode: 'open'});
            this.template = currentDocument.querySelector('template#custom-component');
        }

        connectedCallback() {
            const clonedTemplate = document.importNode(this.template.content, true);

            // bind data directly to cloned template BEFORE appending to shadow root or...
            this.bindData(clonedTemplate);

            this.shadowRoot.appendChild(clonedTemplate);

            // ... bind data to already appended template
            // this.bindData(this.shadowRoot);
        }

        // very simple data binding mechanism
        bindData(root, selector='[data-bind]') {
            root.querySelectorAll(selector).forEach((element) => {
                const attribute = this.attributes.getNamedItem(element.getAttribute('data-bind'));
                if(attribute) {
                    element.innerText = attribute.value;
                }
            });
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

