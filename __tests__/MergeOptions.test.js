const merge = require(`../src/MergeOptions`);

const mockDefaultOptions = {
    opt1: `opt1`,
    opt3: `opt3`,
};
const mockOpt = {
    opt2: `opt2`,
    opt4: `opt4`,
};
const mergedOptions = {
    opt1: `opt1`,
    opt2: `opt2`,
    opt3: `opt3`,
    opt4: `opt4`,
};

test(`Return a combined object given two objects`, () => {
    expect(
        merge(mockDefaultOptions, mockOpt)
    ).toStrictEqual(mergedOptions);
});

test(`Expect default return provided only one object`, () => {
    function run(invalidInput) {
        expect(
            merge(mockDefaultOptions, invalidInput)
        ).toStrictEqual(mockDefaultOptions);
    }
    run();
    run(`wrong`);
    run(undefined);
    run(null);
    run(true);
    run(99);
});

test(`Expect default return provided default and empty object`, () => {
    expect(
        merge(mockDefaultOptions, {})
    ).toStrictEqual(mockDefaultOptions);
});

test(`Expect default return provided default and empty array`, () => {
     expect(
         merge(mockDefaultOptions, [])
     ).toStrictEqual(mockDefaultOptions);
});