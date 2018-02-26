class CustomComponent extends HTMLElement {

    constructor() {
        super();

        // Create open shadow root for this element
        // see https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af
        this.attachShadow({mode: 'open'});
    }

    // HTMLElement callback when shadow tree is inserted into document
    connectedCallback() {
        // simply add markup to shadow root
        this.shadowRoot.innerHTML = `<h2>Hello Custom Component</h2>`;
    }

}

// define new custom element
// !! don't use deprecated document.registerElement() - see https://developer.mozilla.org/de/docs/Web/API/Document/registerElement
customElements.define('custom-component', CustomComponent);
