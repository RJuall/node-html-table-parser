const getHtmlFromFilepath = require(`../src/GetHtmlFromFilepath`);
const mockFs = require(`mock-fs`);

beforeEach(() => {
    mockFs({
        'C:\\temp\\test-fs': {
            'html-file.html': '<html><p>this</p><p>that</p></html>',
            'html-file-alt.htm': '<html><p>this</p><p>that</p></html>',
            'html-txt.txt': '<html><p>this</p><p>that</p></html>',
            'empty-file': '',
            'directory-html': {
                'html-file.html': '<html><p>this</p><p>that</p></html>',
            },
            'empty-directory': {},
        }
    });
});
afterEach(() => { mockFs.restore });

test(`Placeholder test`, () => {
    expect(true).toBe(true);
});