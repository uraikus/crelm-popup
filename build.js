const {readFileSync, writeFileSync} = require('fs')
const {join} = require('path')
const {minify} = require('uglify-js')

build()

function build() {
  let {code, error} = minify(readFileSync(join(__dirname, 'popup.js'), 'utf8'))
  if (error) console.error(error)
  else writeFileSync(join(__dirname, 'popup-min.js'), code, 'utf8')
}