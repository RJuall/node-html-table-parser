const getHtmlFromUrl = require(`../src/GetHtmlFromUrl`);
const nock = require(`nock`);

afterAll(nock.restore);
afterEach(nock.cleanAll);

test(`Return html data given a well-formed request`, () => {
    nock(`https://google.com`)
      .get(`/`)
      .reply(200, `<html></html>`);
    
    return getHtmlFromUrl(`https://google.com/`).then(data => {
        expect(data).toBe(`<html></html>`);
    });
});

test(`Return 404 given a non-existent URL`, () => {
    nock(`https://google.com/fake.html`)
      .get(`/`)
      .reply(404);

    return getHtmlFromUrl(`https://google.com/fake.html/`)
        .then(data => {})
        .catch(data => {
            expect(data.toString()).toMatch(/404$/);
        });
});