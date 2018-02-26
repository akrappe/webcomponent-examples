/// <reference path="../../../node_modules/preact/dist/preact.d.ts" />

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

(function () {
    'use strict';

    class CustomComponent extends withComponent(withPreact()) {
        static get props() {
            return {
                name: props.string,
                url: props.string,
                image: props.string
            };
        }
        render({ name, url, image }) {
            console.log('render()');
            return (
                <div>
                    <h2>{name}</h2>
                    <a href={url} target="_blank">
                        <img src={image} alt={"Image of " + name}/>
                    </a>
                </div>
            )
        }

        connecting() { console.log('connecting()'); }
        connected() { console.log('connected()'); }
        rendering() { console.log('rendering()'); }
        rendered() { console.log('rendered()'); }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

