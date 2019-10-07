const DoesHtmlHaveTable = require('../src/DoesHtmlHaveTable');
const cheerio = require('cheerio');

test(`Return false if no table in provided cheerio/html object`, () => {
    let run = cheerio => {
        expect(
            DoesHtmlHaveTable(cheerio)
        ).toBe(false);
    }
    run(cheerio.load(`<html></html>`));
    run(cheerio.load(`Not even HTML`));
    run(cheerio.load(`<tr></tr><tr><td></td></tr>`));
});

test(`Return true if table(s) exist in provided cheerio/html object`, () => {
    let run = cheerio => {
        expect(
            DoesHtmlHaveTable(cheerio)
        ).toBe(true);
    }
    run(cheerio.load(`<html><table></table></html>`));
    run(cheerio.load(`<html><table></table><table></table></html>`));
    run(cheerio.load(`<html><table></table><table></table><table></table></html>`));
});