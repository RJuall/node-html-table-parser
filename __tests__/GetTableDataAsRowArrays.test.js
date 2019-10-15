const getTableDataAsRowArrays = require(`../src/GetTableDataAsRowArrays`);
const nock = require(`nock`);

afterAll(nock.restore);
afterEach(nock.cleanAll);

const rowArray = [ 
                   `<tr><th>First-Col</th><th>Second-Col</th><th>Third-Col</th></tr>`,
                   `<tr><td>Data-1</td><td>Data-2</td><td>Data-3</td></tr>`,
                   `<tr><td>Data-4</td><td>Data-5</td><td>Data-6</td></tr>`,
                   `<tr><td>Data-7</td><td>Data-8</td><td>Data-9</td></tr>`,
                   `<tr><td>Foot-1</td><td>Foot-2</td><td>Foot-3</td></tr>` 
                 ];

test(`Get a 'truthy' result from querying Google.com`, async () => {
    expect(
       await getTableDataAsRowArrays(`https://google.com`)
    ).toBeTruthy();
});

test(`Get expected output from filepath, single table`, async () => {
    expect(
        await getTableDataAsRowArrays(`./__mocks__/example.full-table.html`)
    ).toStrictEqual(
        { 0: rowArray }
    );
});

test(`Get expected output from filepath, multiple tables`, async () => {
    expect(
        await getTableDataAsRowArrays(`./__mocks__/example.full-table.multiple-tables.html`)
    ).toStrictEqual(
        { 0: rowArray, 1: rowArray }
    );
});