const getTableDataAsRowArrays = require(`../src/GetTableDataAsRowArrays`);

const fullHtmlFileResult = {
    0: [ `<tr><th>First-Col</th><th>Second-Col</th><th>Third-Col</th></tr>`,
         `<tr><td>Data-1</td><td>Data-2</td><td>Data-3</td></tr>`,
         `<tr><td>Data-4</td><td>Data-5</td><td>Data-6</td></tr>`,
         `<tr><td>Data-7</td><td>Data-8</td><td>Data-9</td></tr>`,
         `<tr><td>Foot-1</td><td>Foot-2</td><td>Foot-3</td></tr>` ]
};

test(`Placeholder test`, async () => {
    expect(
       await getTableDataAsRowArrays(`https://google.com`)
    ).toBeTruthy();
});

test(`Get expected output from filepath`, async () => {
    expect(
        await getTableDataAsRowArrays(`./__mocks__/example.full-table.html`)
    ).toStrictEqual(
        fullHtmlFileResult
    );
});