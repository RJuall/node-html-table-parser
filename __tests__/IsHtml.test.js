const isHtml = require(`../src/IsHtml`);

test(`Return true given at least one valid HTML tag`, () => {
    expect(
        isHtml(`<p>`)
    ).toBe(true);
});

test(`Return false given no valid HTML tags`, () => {
    expect(
        isHtml(`no tags here just text`)
    ).toBe(false);
});

test(`Return true given at least one valid HTML tag and invalid tags`, () => {
    expect(
        isHtml(`<p></p>< p></p>`)
    ).toBe(true);
});

test(`Return false given XML-style tags`, () => {
    expect(
        isHtml(`<nonsense></nonsense>`)
    ).toBe(false);
});