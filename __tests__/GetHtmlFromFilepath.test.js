const getHtmlFromFilepath = require(`../src/GetHtmlFromFilepath`);
const mockFs = require(`mock-fs`);

const baseDirectory = `C:/temp/test-fs`;
const expectedHtmlString = `<html><p>this</p><p>that</p></html>`;

beforeEach(() => {
    mockFs({
        'C:/temp/test-fs': {
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
afterEach(() => { mockFs.restore() });

test(`Expect a path to a .html file to return a string of HTML`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/html-file.html`)
    ).toBe(expectedHtmlString);
});

test(`Expect Windows directory conventions to return a string of HTML`, () => {
    expect(
        getHtmlFromFilepath(`C:\\temp\\test-fs\\html-file.html`)
    ).toBe(expectedHtmlString);
});

test(`Expect a path to a .htm file to return a string of HTML`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/html-file-alt.htm`)
    ).toBe(expectedHtmlString);
});

test(`Expect HTML in a text file to return a string of HTML`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/html-txt.txt`)
    ).toBe(expectedHtmlString);
});

test(`Expect an empty file to return an empty string`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/empty-file`)
    ).toBe(``);
});

test(`Expect trying to read a directory to return an Error`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/empty-directory/`)
    ).toMatchObject({ code: `EBADF` });
});

test(`Expect trying to read a non-existent file to return an Error`, () => {
    expect(
        getHtmlFromFilepath(`${baseDirectory}/not-a-file.html`)
    ).toMatchObject({ code: `ENOENT` });
});