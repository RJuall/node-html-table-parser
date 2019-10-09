const splitAllTablesIntoRowArrays = require(`../src/SplitAllTablesIntoRowArrays`);

test(`Placeholder test`, () => {
    function run(input, output) {
        expect(
            splitAllTablesIntoRowArrays(input)
        ).toBe(output);
    }
    run({}, true);
});