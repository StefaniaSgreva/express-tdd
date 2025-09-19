const { test, expect } = require("@jest/globals");
const camelCase = require("./camelCase"); // importa la funzione da testare

test("dovrebbe convertire a camelCase una frase con spazi", () => {
    expect(camelCase("ciao mondo")).toBe("ciaoMondo");
});

test("dovrebbe gestire stringhe con trattini o underscore", () => {
    expect(camelCase("ciao-mondo")).toBe("ciaoMondo");
    expect(camelCase("ciao_mondo")).toBe("ciaoMondo");
});

test("dovrebbe rimuovere spazi multipli", () => {
    expect(camelCase("ciao   mondo")).toBe("ciaoMondo");
});

test("dovrebbe gestire lettere maiuscole casuali", () => {
    expect(camelCase("cIaO mOnDo")).toBe("ciaoMondo");
});

test("dovrebbe gestire stringhe vuote", () => {
    expect(camelCase("")).toBe("");
});

test("dovrebbe lanciare errore se non riceve una stringa", () => {
    expect(() => camelCase(null)).toThrow();
    expect(() => camelCase(123)).toThrow();
});
