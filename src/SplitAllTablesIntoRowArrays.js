const splitTableStringIntoRowArray = require(`./SplitTableStringIntoRowArray`);

function splitAllTablesIntoRowArrays(tableObj) {
    const splitTable = {};
    for (let tableIndex in tableObj) {
        splitTable[tableIndex] = 
            splitTableStringIntoRowArray(tableObj[tableIndex]);
    }
    return splitTable;
}
module.exports = splitAllTablesIntoRowArrays;