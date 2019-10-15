const tableParse = require(`../index`);

const tablePage = `https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics`;

test(`Expect main fn to return 'true' when called with ${tablePage} [PLACEHOLDER]`, 
     async () => {
        expect(
            await tableParse(tablePage)
        ).toBe(true);
});

test(`Throw Error on non-string path input`, async () => {
    async function run(input) {
        expect(
            tableParse(input).then().catch()
        ).toThrow(Error);
    }

    run([]);
    run({});
    run(99);
    run(true);
    run(() => {});
});

test(`Throw Error on non-object options input`, async () => {
    async function run(input) {
        expect(
            tableParse(`https://www.google.com`, input).then().catch()
        ).toThrow(Error);
    }

    run(`String`);
    run(99999999);
    run(true);
    run(null);
    run(() => {});
});