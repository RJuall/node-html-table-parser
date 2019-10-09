const validateInput = require(`./src/ValidateInput`);
const options = require(`./src/DefaultOptions`);

const getTableDataAsRowArrays = require(`./src/GetTableDataAsRowArrays`);

function tableParse (htmlPath, opt) {
    validateInput(htmlPath, `string`);
    if (opt) {
        validateInput(opt, `object`);
        Object.assign(options, opt);
    }

    const tableData = getTableDataAsRowArrays(htmlPath);
    
    // console.log(htmlPath);
    // console.log(opt);
    // console.log(options);

    return true;
}
module.exports = tableParse;