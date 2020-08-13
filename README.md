# crelm-popup
[GitHUB](https://github.com/uraikus/crelm-popup)

A small (<2kb), simple popup component with responsive design using the crelm library. Crelm is the only dependency.

Install:
```
npm i crelm-popup
```
Utilization:
```javascript
let popup = require('crelm-popup')

popup(childrenElements:array, [closeOnBlurClick:boolean || false, maxWidth:number || 300])
let dialog 
dialog = popup([
  {tag: 'h1', text: 'Hello World'},
  {tag: 'input', type: 'button', value: 'Close Dialog', onclick: () => dialog.close()}
])
// you can readjust the maxWidth with the method below
dialog.setWidth(500)
// close the dialog with the method below
dialog.close()
```
You can apply additional styles with the below class names:
```css
.c-popup {}
.c-blur {}
```
See [crelm](https://www.npmjs.com/package/crelm) for more on the children elements.