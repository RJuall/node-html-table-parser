const validateStringInput = require('./src/validateStringInput');
const options = require('./src/DefaultOptions');

function tableParse (htmlPath, opt) {
    validateStringInput(htmlPath);
    if (opt) Object.assign(options, opt);
    
}
module.exports = tableParse;