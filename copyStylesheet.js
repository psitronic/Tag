const fs = require('fs');

const copyFile = (from, to) => fs.writeFile(to, fs.readFileSync(from).toString());
copyFile('./src/css/style.css', './build/contentScripts/css/style.css');