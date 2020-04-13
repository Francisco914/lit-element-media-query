# lit-element-media-query
Lets you manage all the media queries you need

### Description

- It allows you to manage all the media queries you need in an easy and practical way.

### How to use the component?

- Import the component where you need to occupy it.
```Javascript
import 'lit-element-media-query/lit-element-media-query.js';
```
- then add lit-element-media-query to your component's render function
```Javascript
        <lit-element-media-query  
            breakpoints = '${this.breakPoints}'
            @change-size = '${this._changeSize}'>
        </lit-element-media-query>
```
- In the constructor function initialize the breakpoints variable with all the measures you need:
```Javacript
        this.breakPoints = JSON.stringify([
            {"name": "xs", "query": "(min-width:320px)"}, 
            {"name": "sm", "query": "(min-width:600px)"}, 
            {"name": "md", "query": "(min-width:980px)"}, 
            {"name": "lg", "query": "(min-width:1120px)"},
            {"name": "xl", "query": "(min-width:1200px)"}
        ]);
```
- Declare a function where you get the change-size event:
```Javascript
    _changeSize(event) {
        this.size = event.detail;
    }
```
- Finally add the variable that receives the event detail to the element you want to make responsive
```Javascript
 render() {
        return html `
			<div class="${this.size}"></div>
		`;
}
```
