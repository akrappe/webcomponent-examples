import {Component, Prop} from '@stencil/core';

@Component({
    tag: 'custom-component',
    styleUrl: 'custom-component.scss'
})
export class MyComponent {
    @Prop() name: string;
    @Prop() url: string;
    @Prop() image: string;

    render() {
        return (
            <div class="custom">
                <h2>{ this.name }</h2>
                <a href={ this.url } target="_blank">
                    <img src={ this.image } alt={ "Image of " + this.name }/>
                </a>
            </div>
        );
    }
}