(function () {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: 'closed'});
        }

        connectedCallback() {
            document.addEventListener('state', (e) => this.render(e));
            document.dispatchEvent(new CustomEvent('trigger.state'));
        }

        render(e) {
            this._shadowRoot.innerHTML = `<button>Count Up</button> <span>${e.detail.counter}</span>`;

            this._shadowRoot.querySelector('button').addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('action', { detail: { type: 'COUNT_UP' }}));
            });
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

