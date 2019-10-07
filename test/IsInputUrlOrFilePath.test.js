const IsInputUrlOrFilepath = require(`../src/IsInputUrlOrFilepath`);

test(`Throw error on invalid input`, () => {
    let run = input => {
        expect(() => {
            IsInputUrlOrFilepath(input);
        }).toThrow(TypeError);
    };
    run([]);            // array
    run({});            // object
    run(99);            // number
    run(true);          // boolean
    run(null);          // null
    run(() => {});      // function
    run(Symbol());      // symbol
    run(undefined);     // undefined
    run(BigInt(99));    // bigint
});

test(`No error on valid input`, () => {
    let run = input => {
        expect(() => {
            IsInputUrlOrFilepath(input);
        }).not.toThrow(TypeError);
    };
    run(`String Input`);
    run(`https://example.url.com/something.html?x=y`);
    run(`C:\\temp\\example\\folder\\file.html`);
    run(`\\\\relative\\path\\file.html`);
    run(`./file.html`);
});