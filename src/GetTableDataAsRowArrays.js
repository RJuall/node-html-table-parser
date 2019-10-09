const cheerio = require(`cheerio`);

const isInputUrl = require(`./IsInputUrl`);
const doesHtmlHaveTableRows = require(`./DoesHtmlHaveTableRows`);
const getHtmlFromUrl = require(`./GetHtmlFromUrl`);
const getHtmlFromFilepath = require(`./GetHtmlFromFilepath`);
const minifyHtml = require(`./MinifyHtml`);
const isHtml = require(`./IsHtml`);
const getTablesAsTableObject = require(`./GetTablesAsTableObject`);

function getTableDataAsRowArrays(path, options) {
    
    return true;

    const html = isInputUrl(path) ? getHtmlFromUrl(path) : getHtmlFromFilepath(path);

    if(!isHtml(html)) return new Error(`Parse Error - No HTML found`);
    const $ = cheerio.load(minifyHtml(html));

    if (!doesHtmlHaveTableRows($)) return new Error(`Parse Error - No HTML table found`);

    const tables = getTablesAsTableObject($);

}
module.exports = getTableDataAsRowArrays;