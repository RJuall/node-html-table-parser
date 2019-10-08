const minifier = require('html-minifier').minify;

function minifyHtml(html) {
    const options = {
        collapseWhitespace: true,
        removeTagWhitespace: true,
        removeComments: true,
        removeEmptyElements: false,
        continueOnParseError: true,
    }
    return minifier(html, options);
}
module.exports = minifyHtml;