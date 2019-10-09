const splitAllTablesIntoRowArrays = require(`../src/SplitAllTablesIntoRowArrays`);

const tableRow    = `<tr><td>data1</td><td>data2</td></tr>`;
const tableRows   = `${tableRow}${tableRow}${tableRow}`;
const tableRowArr = [ tableRow, tableRow, tableRow ];
const htmlTable   = `<table><tbody>${tableRows}</tbody></table>`;

test(`Replace HTML table string with array of HTML table row strings in return object`, () => {
    function run(input, output) {
        expect(
            splitAllTablesIntoRowArrays(input)
        ).toStrictEqual(output);
    }
    run( { 0: htmlTable }, { 0: tableRowArr });
    run( { 0: htmlTable, 1: htmlTable }, { 0: tableRowArr, 1: tableRowArr });
    run( { 0: htmlTable, 1: htmlTable, 2: htmlTable }, { 0: tableRowArr, 1: tableRowArr, 2: tableRowArr });
});