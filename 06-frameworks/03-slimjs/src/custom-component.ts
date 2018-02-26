import {Slim} from 'slim-js/Slim';
import {tag, template, useShadow} from 'slim-js/Decorators';

(function () {
    'use strict';

    @tag('custom-component')
    @useShadow(true)
    @template('<div>Hello, i am a custom element</div>')
    class CustomComponent extends Slim {
        myName: string;

        onBeforeCreated() {
            this.myName = "slim.js";
        }
    }
})();

