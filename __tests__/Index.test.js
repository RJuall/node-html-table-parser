const tableParse = require(`../index`);

const tablePage = `https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics`;

test(`Expect main fn to return 'true' when called with ${tablePage} [PLACEHOLDER]`, () => {
    expect(
        tableParse(tablePage)
    ).toBe(true);
});