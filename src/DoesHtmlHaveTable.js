function DoesHtmlHaveTable(cheerioObj) {
    return !!cheerioObj('table').get().length;
}
module.exports = DoesHtmlHaveTable;