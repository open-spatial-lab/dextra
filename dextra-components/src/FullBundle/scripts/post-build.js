const fs = require('fs');
// open dist/index.js
let output = fs.readFileSync('dist/index.js', 'utf8');
const injectAtStart = 'function safeCustomElementsDefine(key,fn){if (!customElements.get(key)){customElements.define(key, fn);}};';
// replace all instances of customElenments.define with safeCustomElementsDefine
output = output.replace(/customElements\.define/g, 'safeCustomElementsDefine');
// add the safeCustomElementsDefine function to the top of the file
output = injectAtStart + output;
// write the modified text back to the file
fs.writeFileSync('dist/index.js', output);