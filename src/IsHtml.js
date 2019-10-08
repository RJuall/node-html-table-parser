const htmlValidator = require('is-html');

function isHtml(html) {
    return htmlValidator(html);
}
module.exports = isHtml;