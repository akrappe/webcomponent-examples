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
            this.bindListener(clonedTemplate);
            this.shadowRoot.appendChild(clonedTemplate);
        }

        // very simple event binding mechanism
        bindListener(root) {
            const button = root.querySelector('button#demo');
            const text = root.querySelector('p#target');

            if(button && text) {
                button.addEventListener('click', function(){
                    text.innerText = 'Yeah, Button was clicked!!!';
                });
            }
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

