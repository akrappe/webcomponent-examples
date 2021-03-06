/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  MyComponent as CustomComponent
} from './custom-component';

declare global {
  interface HTMLCustomComponentElement extends CustomComponent, HTMLStencilElement {
  }
  var HTMLCustomComponentElement: {
    prototype: HTMLCustomComponentElement;
    new (): HTMLCustomComponentElement;
  };
  interface HTMLElementTagNameMap {
    "custom-component": HTMLCustomComponentElement;
  }
  interface ElementTagNameMap {
    "custom-component": HTMLCustomComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "custom-component": JSXElements.CustomComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface CustomComponentAttributes extends HTMLAttributes {
      image?: string;
      name?: string;
      url?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
