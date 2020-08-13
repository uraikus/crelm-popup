let popup = require('../popup-min.js')

window.popup = popup

onload = () => {
  let dialog
  window.dialog = dialog = popup([
    {tag: 'h1', text: 'Hello World'},
    {tag: 'input', type: 'button', value: 'Close Dialog', onclick: () => dialog.close()}
  ])
}