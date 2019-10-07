const validateInput = require(`./src/ValidateInput`);
const options = require(`./src/DefaultOptions`);

const getTableData = require(`./src/GetTableData`);

function tableParse (htmlPath, opt) {
    validateInput(htmlPath, `string`);
    if (opt) {
        validateInput(opt, `object`);
        Object.assign(options, opt);
    }

    const tableData = getTableData(htmlPath, options);
    
    console.log(htmlPath);
    console.log(opt);
    console.log(options);
}
module.exports = tableParse;