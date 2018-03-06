import {Slim} from 'slim-js/Slim';
import {tag, template} from 'slim-js/Decorators';

(function () {
    'use strict';

    @tag('custom-component')
    @template('<div>Hello, i am a custom element</div>')
    class CustomComponent extends Slim {
    }
})();

