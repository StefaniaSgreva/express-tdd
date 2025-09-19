const {test, expect} = require("@jest/globals");
const kebabCase = require("./kebab_case.js");

test("dovrebbe convertire il testo in kebab-case", () => {
    const testo = "questo è un testo";
    const result = kebabCase(testo);

    expect(result).toBe("questo-e-un-testo");
});