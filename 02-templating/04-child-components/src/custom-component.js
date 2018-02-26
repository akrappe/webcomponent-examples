import './child-component';

(function() {
    'use strict';

    class CustomComponent extends HTMLElement {

        constructor() {
            super();
            console.log('CustomComponent constructor');

            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            console.log('CustomComponent connectedCallback');
            this.shadowRoot.innerHTML = `
                <style> child-component { display:block; border:1px solid lightcoral; padding:10px; } </style>
                <h2>Parent Component</h2><child-component></child-component>
            `;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

