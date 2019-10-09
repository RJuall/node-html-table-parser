const cheerio = require('cheerio');

const getTablesAsTableObject = require(`../src/GetTablesAsTableObject`);

const completeHtmlTable = `<table><tbody><tr><th>header</th></tr>`
                          + `<tr><td>data</td></tr></tbody></table>`;
const sampleHtmlDocument = `<html><head></head><body>${completeHtmlTable}`
                           + `<h1>THIS</h1><p>that</p></body></html>`;
const htmlDocNoTable = `<html><head></head><body><h1>THIS</h1><p>that</p></body></html>`;
const oneTableObject = { 0: `${completeHtmlTable}`};

test(`Return table(s) as a table object`, () => {
    function run(input, output) {
        expect(
            getTablesAsTableObject(cheerio.load(input))
        ).toStrictEqual(output);
    }
    run(sampleHtmlDocument, oneTableObject);
    run(completeHtmlTable, oneTableObject);
    run(`${completeHtmlTable}${completeHtmlTable}`, { 0: `${completeHtmlTable}`, 1: `${completeHtmlTable}` });
    run(htmlDocNoTable, {});
});