import {html, LitElement} from 'lit-element';

class litElementMediaQuery extends LitElement{
    static get properties() {
        return {
            breakPoints: {
                type: Array,
            }
        }
    }

    constructor(){
        super();
        this.breakPoints = [];
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
        let result = this._getBreakPoint();
        this.dispatchEvent(new CustomEvent('change-size',{
            detail: result,
            composed: true,
            bubbles: true
        }));
    }

    updated() {
        window.addEventListener('resize', () => {
            let result = this._getBreakPoint();
            this.dispatchEvent(new CustomEvent('change-size',{
                detail: result,
                composed: true,
                bubbles: true
            }));
        })
    }

    _getBreakPoint() {
        let result = '';
        this.breakPoints.forEach(element => {
            if(window.matchMedia(element.query).matches) {
                result = element.name;
            }
        });
        return result;
    }

}
customElements.define('lit-element-media-query', litElementMediaQuery);
