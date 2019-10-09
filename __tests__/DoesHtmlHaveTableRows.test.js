const doesHtmlHaveTableRows = require('../src/DoesHtmlHaveTableRows');
const cheerio = require('cheerio');

test(`Return false if no table rows in provided cheerio/html object`, () => {
    const run = cheerio => {
        expect(
            doesHtmlHaveTableRows(cheerio)
        ).toBe(false);
    }
    run(cheerio.load(`<html></html>`));
    run(cheerio.load(`Not even HTML`));
    run(cheerio.load(`<table></table>`));
    run(cheerio.load(`<statement>Definitely XML</statement>`));
    run(cheerio.load(`<tr></tr><tr><td>Not valid HTML</td></tr>`));
});

test(`Return true if table rows exist in provided cheerio/html object`, () => {
    const run = cheerio => {
        expect(
            doesHtmlHaveTableRows(cheerio)
        ).toBe(true);
    }
    run(cheerio.load(`<html><table><tr></tr><tr></tr></table></html>`));
    run(cheerio.load(`<html><table><tr></tr></table><table></table></html>`));
    run(cheerio.load(`<html><table><tr><td></td></tr></table><table><tr><td>data`
                     + `</td></tr></table><table></table></html>`));    
});