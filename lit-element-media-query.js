import {html, LitElement} from 'lit-element';

class litElementMediaQuery extends LitElement{
    static get properties() {
        return {
            breakPoints: {
                type: Array,
            },
            
            size: {
                type: String,
            }
        }
    }

    constructor(){
        super();
        this.breakPoints = [];
        this.size = '';
    }

    render() {
        return html `
            <style>
                :host {
                    display: none;
                }
            </style>
        `
    }

    firstUpdated() {
        this._getBreakPoint();
    }

    updated() {
        window.addEventListener('resize', () => {
            this._getBreakPoint();
        })
    }

    _getBreakPoint() {
        let result = '';
        this.breakPoints.forEach(element => {
            if(window.matchMedia(element.query).matches) {
                result = element.name;
            }
        });
        this.size = result;
    }

}
customElements.define('lit-element-media-query', litElementMediaQuery);
