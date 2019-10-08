const getHtmlFromUrl = require(`../src/GetHtmlFromUrl`);
const nock = require(`nock`);

afterAll(nock.restore);
afterEach(nock.cleanAll);

test(`Return html data given a well-formed request`, async () => {
    nock(`https://google.com`)
      .get(`/`)
      .reply(200, `<html></html>`);
    
    return getHtmlFromUrl(`https://google.com/`).then(data => {
        expect(data).toBe(`<html></html>`);
    });
});