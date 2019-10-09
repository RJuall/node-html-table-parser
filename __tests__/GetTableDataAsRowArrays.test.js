const getTableDataAsRowArrays = require(`../src/GetTableDataAsRowArrays`);

test(`Placeholder test`, async () => {
    expect(
       await getTableDataAsRowArrays(`https://google.com`)
    ).toBe(true);
});