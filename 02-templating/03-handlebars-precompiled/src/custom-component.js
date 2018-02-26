(function () {
    'use strict';

    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;

    class CustomComponent extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({mode: 'open'});
            this.template = currentDocument.querySelector('template#custom-component');
        }

        connectedCallback() {
            this.shadowRoot.innerHTML = this.createTemplate().trim();
        }

        createTemplate() {
            // simple static json data
            const json = {
                name: 'Steve Jobs',
                url: 'https://de.wikipedia.org/wiki/Steve_Jobs',
                image: 'https://cdn.macrumors.com/article-new/2017/10/steve-jobs-800x533.jpg'
            };

            // precompiled and minified handlebars template
            const template = Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,s){var i;return"<h2>"+n.escapeExpression("function"==typeof(i=null!=(i=e.name||(null!=a?a.name:a))?i:e.helperMissing)?i.call(null!=a?a:{},{name:"name",hash:{},data:s}):i)+'</h2>\n<a href="'+n.escapeExpression("function"==typeof(i=null!=(i=e.url||(null!=a?a.url:a))?i:e.helperMissing)?i.call(null!=a?a:{},{name:"url",hash:{},data:s}):i)+'" target="_blank">\n  <img src="'+n.escapeExpression("function"==typeof(i=null!=(i=e.image||(null!=a?a.image:a))?i:e.helperMissing)?i.call(null!=a?a:{},{name:"image",hash:{},data:s}):i)+'" alt="Image of '+n.escapeExpression("function"==typeof(i=null!=(i=e.name||(null!=a?a.name:a))?i:e.helperMissing)?i.call(null!=a?a:{},{name:"name",hash:{},data:s}):i)+'">\n</a>'},useData:!0});
            return template(json);
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

