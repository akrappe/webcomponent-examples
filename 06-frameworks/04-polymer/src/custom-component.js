// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';

// Added "export" to export the MyApp symbol from the module
export class CustomComponent extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `<div>This is my [[name]] app.</div>`
    }

    constructor() {
        super();
        this.name = '3.0 preview';
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('custom-component', CustomComponent);