function getTablesAsTableObject(cheerioObj) {
    const tableObj = {};
    cheerioObj('table').each((i, elem) => {
        tableObj[i] = `<table>${cheerioObj(elem).html()}</table>`;
    });
    return tableObj;
}
module.exports = getTablesAsTableObject;