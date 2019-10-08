const minifyHtml = require(`../src/MinifyHtml`);

test(`Removes whitespace from HTML string`, () => {
    expect(
        minifyHtml(`<p> this </p  >   <h1 >  that</h1 >`)
    ).toBe(`<p>this</p><h1>that</h1>`);
});

test(`Removes whitespace within HTML tags`, () => {
    expect(
        minifyHtml(`<p>      this    </p><p>   that   </p>  `)
    ).toBe(`<p>this</p><p>that</p>`);
});

test(`Removes whitespace between HTML tags`, () => {
    expect(
        minifyHtml(`<p>this</p>    <p>that</p>     <h1>the other</h1>`)
    ).toBe(`<p>this</p><p>that</p><h1>the other</h1>`);
});

test(`Removes comments from html string`, () => {
    expect(
        minifyHtml(`<p><!--comment-->this</p>`)
    ).toBe(`<p>this</p>`);
});

test(`Does not remove empty elements`, () => {
    expect(
        minifyHtml(`<p>this</p><p></p><p>that</p>`)
    ).toBe(`<p>this</p><p></p><p>that</p>`);
});

test(`Attempts to auto-correct misformed HTML`, () => {
    expect(
        minifyHtml(`
            <p>this <p>that</p>
        `)
    ).toBe(`<p>this</p><p>that</p>`);
});