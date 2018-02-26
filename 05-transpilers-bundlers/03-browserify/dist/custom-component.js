(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
(function () {
    'use strict';
    const currentDocument = (document._currentScript || document.currentScript).ownerDocument;
    class CustomComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.template = currentDocument.querySelector('template#custom-component');
        }
        connectedCallback() {
            this.shadowRoot.innerHTML = this.createTemplate().trim();
        }
        createTemplate() {
            const name = 'Steve Jobs';
            const url = 'https://de.wikipedia.org/wiki/Steve_Jobs';
            const image = 'https://cdn.macrumors.com/article-new/2017/10/steve-jobs-800x533.jpg';
            // simple es6 template literal for the sake of simplicity
            return `
                <h2>${name}</h2>
                <a href="${url}" target="_blank">
                    <img src="${image}" alt="Image of ${name}">
                </a>
            `;
        }
    }
    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

},{}]},{},[1]);
