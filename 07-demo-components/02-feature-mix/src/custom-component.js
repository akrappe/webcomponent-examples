import { Slider } from './slider';
import styles from './styles.css';

(function () {
    'use strict';

    class CustomComponent extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = this.createTemplate().trim();
            this.slider = new Slider(this.querySelector(".vjslider"), {});

            this.querySelector('.js-prev').addEventListener('click', (event) => {
                event.preventDefault();
                this.slider.prev();
            });

            this.querySelector('.js-next').addEventListener('click', (event) => {
                event.preventDefault();
                this.slider.next();
            });
        }

        createTemplate() {
            return `
                <style>
                    ${styles}
                </style>
                <h3>${new Date(Date.now()).toLocaleString()}</h3>
                <div class="vjslider">
                    <div class="vjslider__slide vjslider__slide--blue">
                        <p>Slide 1</p>
                    </div>
                    <div class="vjslider__slide vjslider__slide--green">
                        <p>Slide 2</p>
                    </div>
                    <div class="vjslider__slide vjslider__slide--pink">
                        <p>Slide 3</p>
                    </div>
                </div>
                <hr>
                <nav>
                    <ul class="menu">
                        <li class="menu__element">
                            <a href="#" class="js-prev">&lt; Prev</a>
                        </li>
                        <li class="menu__element">
                            <a href="#" class="js-next">Next &gt;</a>
                        </li>
                    </ul>
                </nav>
            `;
        }
    }

    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();

