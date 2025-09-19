const {test, expect} = require("@jest/globals");
const kebabCase = require("./kebab_case.js");

test("dovrebbe convertire il testo in kebab-case", () => {
    const testo = "questo è un testo";
    const result = kebabCase(testo);

    expect(result).toBe("questo-e-un-testo");
});

test("dovrebbe gestire tutti i caratteri accentati", () => {
    const testo = "questo èàòùèéì un testo";
    const result = kebabCase(testo);

    expect(result).toBe("questo-eaoueei-un-testo");
});

test("dovrebbe gestire tutti i caratteri speciali", () => {
    const testo = "questo ' ?_!£&% testo";
    const result = kebabCase(testo);

    expect(result).toBe("questo-testo");
});

test("dovrebbe gestire i caratteri in maiuscolo", () => {
    const testo = "questo è UN MessaGGIO testo";
    const result = kebabCase(testo);

    expect(result).toBe("questo-e-un-messaggio-testo");
});

test("dovrebbe gestire gli spazi vuoti prima e dopo", () => {
    const testo = "   questo è UN MessaGGIO testo       ";
    const result = kebabCase(testo);

    expect(result).toBe("questo-e-un-messaggio-testo");
});

// per testare errori
test("dovrebbe lanciare un errore in caso di input non valido", () => {
  expect(() => kebabCase(1234)).toThrow();
});
