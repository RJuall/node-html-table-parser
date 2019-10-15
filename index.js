const validateInput = require(`./src/ValidateInput`);
const options = require(`./src/DefaultOptions`);

const getTableDataAsRowArrays = require(`./src/GetTableDataAsRowArrays`);

async function tableParse (htmlPath, opt) {
    validateInput(htmlPath, `string`);
    if (opt) {
        validateInput(opt, `object`);
        Object.assign(options, opt);
    }

    const tableData = await getTableDataAsRowArrays(htmlPath);
    
    if (tableData instanceof Error) throw tableData;

    // console.log(htmlPath);
    // console.log(opt);
    // console.log(options);

    return true;
}
module.exports = tableParse;