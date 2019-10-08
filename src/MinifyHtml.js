const minifier = require('html-minifier').minify;

function minifyHtml(html) {
    return minifier(html);
}
module.exports = minifyHtml;