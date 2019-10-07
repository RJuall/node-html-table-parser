const IsInputUrl = require(`../src/IsInputUrl`);

test(`Return false if input is not a http/https URL`, () => {
    const run = input => {
        expect(
            IsInputUrl(input)
        ).toBe(false);
    }
    run(`String Input`);
    run(`C:\\temp\\example\\folder\\file.html`);
    run(`\\\\relative\\path\\file.html`);
    run(`./file.html`);
    run(`www.google.com this that`);
});

test(`Return true if input is a http/https URL`, () => {
    const run = input => {
        expect(
            IsInputUrl(input)
        ).toBe(true);
    }
    run(`www.something.com`);
    run(`https://www.something.com/index.html?x=y&y=z`);
    run(`http://something.com/something.html?x=y&y=z`);
});