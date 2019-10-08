const fs = require('fs');

function getHtmlFromFilepath(path) {
    try {
        return fs.readFileSync(path, `utf8`);
    }
    catch (err) {
        return err;
    }
}
module.exports = getHtmlFromFilepath;