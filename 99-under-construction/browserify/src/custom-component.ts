import { Slider } from './slider';

(function () {
    'use strict';

    class CustomComponent extends HTMLElement {
        private slider: any;

        constructor() {
            super();
            console.log('test');
        }

        connectedCallback() {
            this.innerHTML = this.createTemplate().trim();
            this.slider = new Slider(this.querySelector(".vjslider"), {});

            this.querySelector('.js-prev').addEventListener('click', (event) => {
                event.preventDefault();
                // this.slider.prev();
            });

            this.querySelector('.js-next').addEventListener('click', (event) => {
                event.preventDefault();
                // this.slider.next();
            });
        }

        createTemplate() {
            return `
                <style>
                    .vjslider {
                        width: 100%;
                        overflow: hidden;
                    }
            
                    .vjslider__slider {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        align-items: center;
                        transition: none;
                    }
            
                    .vjslider__slider--animate {
                        transition: transform .3s;
                    }
            
                    .vjslider__slide {
                        width: 100%;
                        height: 20rem;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
            
                    .vjslider__slide--blue {
                        background-color: #9abdf9;
                    }
            
                    .vjslider__slide--green {
                        background-color: #76ab08;
                    }
            
                    .vjslider__slide--pink {
                        background-color: #e77aad;
                    }
            
                    .menu {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
            
                    .menu__element {
                        padding: 5px;
                    }
                </style>
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

