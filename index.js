const defaultOptions = require(`./src/DefaultOptions`);

const validateInput = require(`./src/ValidateInput`);
const mergeOptions = require(`./src/MergeOptions`);

const getTableDataAsRowArrays = require(`./src/GetTableDataAsRowArrays`);

// Define a 'toJSON()' method on a data object?
async function tableParse (htmlPath, opt) {
    validateInput(htmlPath, `string`);
    const options = mergeOptions(defaultOptions, opt);

    const tableData = await getTableDataAsRowArrays(htmlPath);
    if (tableData.data) console.log(tableData.data);
    if (tableData instanceof Error) throw tableData;

    // console.log(htmlPath);
    // console.log(opt);
    // console.log(options);

    return true;
}
module.exports = tableParse;