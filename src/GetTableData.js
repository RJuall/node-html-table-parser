const cheerio = require('cheerio');

const isInputUrl = require(`./IsInputUrl`);
const doesHtmlHaveTable = require(`./DoesHtmlHaveTable`);
const getHtmlFromUrl = require(`./GetHtmlFromUrl`);
const getHtmlFromFilepath = require(`./GetHtmlFromFilepath`);

function getTableData(path, options) {
    const html = isInputUrl(path) ? getHtmlFromUrl(path) : getHtmlFromFilepath(path);
    const $ = cheerio.load(html);
    if (!doesHtmlHaveTable($)) throw new Error(`Parse Error - No table found`);
}
module.exports = getTableData;