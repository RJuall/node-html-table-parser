function doesHtmlHaveTableRows(cheerioObj) {
    return !!cheerioObj('tr').get().length;
}
module.exports = doesHtmlHaveTableRows;