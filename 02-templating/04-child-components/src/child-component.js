(function() {
    'use strict';

    class ChildComponent extends HTMLElement {

        constructor() {
            super();
            console.log('ChildComponent constructor');

            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            console.log('ChildComponent connectedCallback');
            this.shadowRoot.innerHTML = `<p>Child Component</p>`;
        }
    }

    if (!customElements.get('child-component')) {
        customElements.define('child-component', ChildComponent);
    }
})();

