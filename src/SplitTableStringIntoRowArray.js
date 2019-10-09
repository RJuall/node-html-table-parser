const cheerio = require(`cheerio`);

function splitTableStringIntoRowArray(tableString) {
    const $ = cheerio.load(tableString);
    const rowArray = [];
    $('tr').each((i, elem) => {
        rowArray.push(`<tr>${$(elem).html()}</tr>`);
    });
    return rowArray;
}
module.exports = splitTableStringIntoRowArray;