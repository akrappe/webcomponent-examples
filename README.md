# Web Components Introduction and Examples

This is a collection of Web Component examples.  
The intention of this repo is to give you an introduction into Web Components, there characteristics and some best practices.

> All features and functions of those examples are documented as code comments. 
> So pretty much every undocumented line of code was documented in a prior or easier chapter. 

Most examples are written in ES6. The simple examples mostly show only a single feature and are not intended to run in all possible browsers!
Those examples are working great in current Chrome releases. Production environments usually need to run bundlers like Webpack...   

For a short summary and overview of the Web Component Specification see [MDN Web Components](https://developer.mozilla.org/de/docs/Web/Web_Components)

## Installation

Even though all distribution folders are committed in this repository you might want to play around with the code examples.

Run `yarn install` to install all dependencies first. 

See `scripts` property in `package.json` and run tasks as needed. 
All build tasks are number by there chapter prefix number, e.g. `yarn build-13`.  

## Known limitiations / drawbacks

* Because most Browsers do not fully support the Web Components specifications we need to use polyfills  

* ES5 vs Native Custom Elements
  * ES5-style classes don't work with native Custom Elements
  * All constructors in an inheritance hierarchy must be ES5-style

* Sharing of Styles into Shadow DOM is not (wisely) possible today (February 2018) 

## Link collection

### General Documentation
* [Huge Web Component Link Collection](https://github.com/mateusortiz/webcomponents-the-right-way)
* [Web Components Overview](https://developer.mozilla.org/de/docs/Web/Web_Components)
* [Custom Elements with ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements/Custom_Elements_with_Classes)

### Styling
* [Global Styling of Web Components](https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/)

### Templating
* [ES6 Template Literals, the Handlebars killer?](https://www.keithcirkel.co.uk/es6-template-literals/)
* [Preact](https://github.com/developit/preact)

### Frameworks
* [Polymer Project](https://www.polymer-project.org/)
* [Stencil - web component compiler](https://stenciljs.com/docs/my-first-component)
* [SkateJS - Functional Abstraction over Web Components](https://github.com/skatejs/skatejs)
* [SkateJS - VirtualDOM abstraction layer for React, Preact...](https://github.com/skatejs/val)

### Tools
* [Google JSON-LD Testtool](https://search.google.com/structured-data/testing-tool/u/0/)

### Workarounds / Shims
* [Web Components Polyfill](https://www.webcomponents.org/polyfills)
* [Web Components Polyfill @GitHub](https://github.com/webcomponents/webcomponentsjs)



