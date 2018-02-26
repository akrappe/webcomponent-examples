var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    'use strict';
    var currentDocument = (document._currentScript || document.currentScript).ownerDocument;
    var CustomComponent = (function (_super) {
        __extends(CustomComponent, _super);
        function CustomComponent() {
            var _this = _super.call(this) || this;
            _this.attachShadow({ mode: 'open' });
            _this.template = currentDocument.querySelector('template#custom-component');
            return _this;
        }
        CustomComponent.prototype.connectedCallback = function () {
            this.shadowRoot.innerHTML = this.createTemplate().trim();
        };
        CustomComponent.prototype.createTemplate = function () {
            var name = 'Steve Jobs';
            var url = 'https://de.wikipedia.org/wiki/Steve_Jobs';
            var image = 'https://cdn.macrumors.com/article-new/2017/10/steve-jobs-800x533.jpg';
            return "\n                <h2>" + name + "</h2>\n                <a href=\"" + url + "\" target=\"_blank\">\n                    <img src=\"" + image + "\" alt=\"Image of " + name + "\">\n                </a>\n            ";
        };
        return CustomComponent;
    }(HTMLElement));
    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();
//# sourceMappingURL=custom-component.js.map