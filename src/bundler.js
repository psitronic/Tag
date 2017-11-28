import mainHTML from './html/index.html';
import executeScript from './js/script_with_export';

const addCSS = function(style) {
    const stylesheet = document.createElement('style');
    stylesheet.innerHTML = style;
    document.body.appendChild(stylesheet);
};
const addHTML = function(html) {
    $('body').append(html);
};

addHTML(mainHTML);
executeScript();