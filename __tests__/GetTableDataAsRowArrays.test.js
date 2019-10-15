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

test(`Get expected output from URL, single table`, async () => {
    nock(`https://www.fakewebsite.com`)
        .get(`/index.html`)
        .replyWithFile(
            200,
            `./__mocks__/example.full-table.html`, 
            { 'Content-Type': 'text/html' }
        );

    expect(
        await getTableDataAsRowArrays(`https://www.fakewebsite.com/index.html`)
    ).toStrictEqual(
        { 0: rowArray }
    );
});

test(`Get expected output from URL, multiple tables`, async () => {
    nock(`https://www.fakewebsite.com`)
        .get(`/index.html`)
        .replyWithFile(
            200,
            `./__mocks__/example.full-table.multiple-tables.html`, 
            { 'Content-Type': 'text/html' }
        );

    expect(
        await getTableDataAsRowArrays(`https://www.fakewebsite.com/index.html`)
    ).toStrictEqual(
        { 0: rowArray, 1: rowArray }
    );
});

test(`Return error when not finding HTML from URL`, async () => {
    nock(`https://www.fakewebsite.com`)
        .get(`/no-html.txt`)
        .replyWithFile(
            200,
            `./__mocks__/example.no-html.txt`,
            { 'Content-Type': 'text/plain' }
        );

    let res = await getTableDataAsRowArrays(`https://www.fakewebsite.com/no-html.txt`);    
    expect(
        res.toString()
    ).toMatch(/No HTML Found$/i);
});

test(`Return error when not finding table in HTML from URL`, async () => {
    nock(`https://www.fakewebsite.com`)
        .get(`/no-table.html`)
        .replyWithFile(
            200,
            `./__mocks__/example.no-table.html`,
            { 'Content-Type': 'text/html' }
        );

    let res = await getTableDataAsRowArrays(`https://www.fakewebsite.com/no-table.html`);    
    expect(
        res.toString()
    ).toMatch(/No HTML Table Found$/i);
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

test(`Return error when not finding HTML from filepath`, async () => {
    let res = await getTableDataAsRowArrays(`./__mocks/example.no-html.txt`);    
    expect(
        res.toString()
    ).toMatch(/No HTML Found$/i);
});

test(`Return error when not finding a table in HTML from filepath`, async () => {
    let res = await getTableDataAsRowArrays(`./__mocks__/example.no-table.html`);    
    expect(
        res.toString()
    ).toMatch(/No HTML Table Found$/i);
});