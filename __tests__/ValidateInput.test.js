const validateInput = require(`../src/ValidateInput`);

test(`Throw error on invalid input`, () => {
    const run = (input, type) => {
        expect(() => {
            validateInput(input, type);
        }).toThrow(TypeError);
    };
    run([], `string`);            // array object
    run({}, `string`);            // object
    run(99, `string`);            // number
    run(true, `string`);          // boolean
    run(null, `string`);          // null
    run(() => {}, `string`);      // function
    run(Symbol(), `string`);      // symbol
    run(undefined, `string`);     // undefined
    run(BigInt(99), `string`);    // bigint
});

test(`No error on valid input`, () => {
    const run = input => {
        expect(() => {
            validateInput(input, type);
        }).not.toThrow(TypeError);
    };
    run(`String Input`, `string`);
    run(`https://example.url.com/something.html?x=y`, `string`);
    run(`C:\\temp\\example\\folder\\file.html`, `string`);
    run(`\\\\relative\\path\\file.html`, `string`);
    run(`./file.html`, `string`);
    run({}, `object`);
    run({this: "that", that: "the-other"}, `object`);
});