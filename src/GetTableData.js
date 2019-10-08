const cheerio = require(`cheerio`);

const isInputUrl = require(`./IsInputUrl`);
const doesHtmlHaveTable = require(`./DoesHtmlHaveTable`);
const getHtmlFromUrl = require(`./GetHtmlFromUrl`);
const getHtmlFromFilepath = require(`./GetHtmlFromFilepath`);
const minifyHtml = require(`./MinifyHtml`);
const isHtml = require(`./IsHtml`);

function getTableData(path, options) {
    
    const html = isInputUrl(path) ? getHtmlFromUrl(path) : getHtmlFromFilepath(path);

    if(!isHtml(html)) return new Error(`Parse Error - No HTML found`);
    const $ = cheerio.load(minifyHtml(html));

    if (!doesHtmlHaveTable($)) return new Error(`Parse Error - No HTML table found`);
}
module.exports = getTableData;