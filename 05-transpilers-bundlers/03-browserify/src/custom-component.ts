(function () {
    'use strict';

    const currentDocument = ((<any>document)._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {
        private template: Element;

        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.template = currentDocument.querySelector('template#custom-component');
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = this.createTemplate().trim();
        }

        createTemplate(): string {
            const name: string = 'Steve Jobs';
            const url: string = 'https://de.wikipedia.org/wiki/Steve_Jobs';
            const image: string = 'https://cdn.macrumors.com/article-new/2017/10/steve-jobs-800x533.jpg';

            // simple es6 template literal for the sake of simplicity
            return `
                <h2>${ name }</h2>
                <a href="${ url }" target="_blank">
                    <img src="${ image }" alt="Image of ${ name }">
                </a>
            `;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

