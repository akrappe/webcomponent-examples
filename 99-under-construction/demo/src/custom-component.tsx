/// <reference path="../../../node_modules/preact/dist/preact.d.ts" />

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

import * as styles from './styles.scss';

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
            return (
                <div>
                    <style>{styles}</style>
                    <h2 class="demo">{name}</h2>
                    <a href={url} target="_blank">
                        <img src={image} alt={"Image of " + name}/>
                    </a>
                </div>
            )
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

