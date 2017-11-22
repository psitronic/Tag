const fs = require('fs');

const script = fs.readFileSync('./src/js/script.js').toString();
const scriptWithExport = 'export default function() {\n' + script + '\n};';
fs.writeFile('./src/js/script_with_export.js', scriptWithExport);