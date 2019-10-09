const getTableDataAsRowArrays = require(`../src/GetTableDataAsRowArrays`);

test(`Placeholder test`, () => {
    expect(
        getTableDataAsRowArrays(`https://google.com`)
    ).toBe(true);
});