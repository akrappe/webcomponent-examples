(function() {
    'use strict';

    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = this.createTemplate().trim();
        }

        createTemplate() {
            // grab JSON-LD identifier from custom element
            const dataId = this.attributes.getNamedItem('jsonld').value;

            // get JSON-LD data from current document and parse to JSON
            const jsonld = currentDocument.getElementById(dataId).innerHTML;
            const data = JSON.parse(jsonld);

            // simple es6 template literal for the sake of simplicity
            return `
                <h2>${ data.name }</h2>
                <a href="${ data.url }" target="_blank">
                    <img src="${ data.image }" alt="Image of ${ data.name }">
                </a>
            `;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

