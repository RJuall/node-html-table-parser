const splitTableStringIntoRowArray = require(`../src/SplitTableStringIntoRowArray`);

test(`Placeholder test`, () => {
    function run(input, output) {
        expect(
            splitTableStringIntoRowArray(input)
        ).toBe(output);
    }
    run(``, true);
});