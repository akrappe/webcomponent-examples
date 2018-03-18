import {bind} from 'hyperhtml/esm';
import tpl from './template';

(function () {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor(...args) {
            super(...args);
            this.html = bind(this);
        }

        connectedCallback() {
            document.addEventListener('state', (e) => {
                this.counter = e.detail.counter;
                this.render();
            });

            document.dispatchEvent(new CustomEvent('trigger.state'));
        }

        countUp() {
            document.dispatchEvent(new CustomEvent('action', { detail: { type: 'COUNT_UP' }}));
        }

        render() {
            return tpl(this);
        }
    }

    // CustomComponent.define('custom-component');
    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

