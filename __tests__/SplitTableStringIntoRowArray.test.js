const splitTableStringIntoRowArray = require(`../src/SplitTableStringIntoRowArray`);

const tableRow      = `<tr><td>data1</td><td>data2</td></tr>`;
const oneRowTable   = `<table><tbody>${tableRow}</tbody></table>`;
const twoRowTable   = `<table><tbody>${tableRow}${tableRow}</tbody></table>`;
const threeRowTable = `<table><tbody>${tableRow}${tableRow}${tableRow}</tbody></table>`;

test(`Return array of HTML row strings from an HTML table string`, () => {
    function run(input, output) {
        expect(
            splitTableStringIntoRowArray(input)
        ).toStrictEqual(output);
    }
    run(oneRowTable,   [tableRow]);
    run(twoRowTable,   [tableRow, tableRow]);
    run(threeRowTable, [tableRow, tableRow, tableRow]);
});