const getHtmlFromUrl = require(`../src/GetHtmlFromUrl`);
const nock = require(`nock`);

afterAll(nock.restore);
afterEach(nock.cleanAll);

test(`Return html data given a well-formed request`, () => {
    nock(`https://www.fakewebsite.com`)
      .get(`/index.html`)
      .reply(200, `<html></html>`);
    
    return getHtmlFromUrl(`https://www.fakewebsite.com/index.html`)
        .then(data => {
            expect(data).toBe(`<html></html>`);
        })
        .catch(data => { throw new Error(`Test failed.`) });
});

test(`Return 404 given a non-existent URL`, () => {
    nock(`https://www.fakewebsite.com`)
      .get(`/nothing.html`)
      .reply(404);

    return getHtmlFromUrl(`https://www.fakewebsite.com/nothing.html`)
        .then(data => { throw new Error(`Test failed.`) })
        .catch(data => {
            expect(data.toString()).toMatch(/404$/);
        });
});

test(`Return 400 given invalid URL input`, () => {
    return getHtmlFromUrl(`nonsense`)
    .then(data => { throw new Error(`Test failed.`) })
        .catch(data => {
            expect(data.toString()).toMatch(/400$/);
        });
});