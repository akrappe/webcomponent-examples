(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
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
exports.__esModule = true;
(function () {
    'use strict';
    var CustomComponent = /** @class */ (function (_super) {
        __extends(CustomComponent, _super);
        // private slider: any;
        function CustomComponent() {
            var _this = _super.call(this) || this;
            console.log('test');
            return _this;
        }
        CustomComponent.prototype.connectedCallback = function () {
            this.innerHTML = this.createTemplate().trim();
            // this.slider = new Slider(this.querySelector(".vjslider"), {});
            this.querySelector('.js-prev').addEventListener('click', function (event) {
                event.preventDefault();
                // this.slider.prev();
            });
            this.querySelector('.js-next').addEventListener('click', function (event) {
                event.preventDefault();
                // this.slider.next();
            });
        };
        CustomComponent.prototype.createTemplate = function () {
            return "\n                <style>\n                    .vjslider {\n                        width: 100%;\n                        overflow: hidden;\n                    }\n            \n                    .vjslider__slider {\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: nowrap;\n                        align-items: center;\n                        transition: none;\n                    }\n            \n                    .vjslider__slider--animate {\n                        transition: transform .3s;\n                    }\n            \n                    .vjslider__slide {\n                        width: 100%;\n                        height: 20rem;\n                        color: #fff;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                    }\n            \n                    .vjslider__slide--blue {\n                        background-color: #9abdf9;\n                    }\n            \n                    .vjslider__slide--green {\n                        background-color: #76ab08;\n                    }\n            \n                    .vjslider__slide--pink {\n                        background-color: #e77aad;\n                    }\n            \n                    .menu {\n                        display: flex;\n                        width: 100%;\n                        justify-content: center;\n                        list-style: none;\n                        padding: 0;\n                        margin: 0;\n                    }\n            \n                    .menu__element {\n                        padding: 5px;\n                    }\n                </style>\n                <div class=\"vjslider\">\n                    <div class=\"vjslider__slide vjslider__slide--blue\">\n                        <p>Slide 1</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--green\">\n                        <p>Slide 2</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--pink\">\n                        <p>Slide 3</p>\n                    </div>\n                </div>\n                <hr>\n                <nav>\n                    <ul class=\"menu\">\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-prev\">&lt; Prev</a>\n                        </li>\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-next\">Next &gt;</a>\n                        </li>\n                    </ul>\n                </nav>\n            ";
        };
        return CustomComponent;
    }(HTMLElement));
    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
