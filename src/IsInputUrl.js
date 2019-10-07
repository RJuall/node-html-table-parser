const urlRegex = require('url-regex');

function IsInputUrl(input) {
    return urlRegex({exact: true, strict: false}).test(input);
}
module.exports = IsInputUrl;