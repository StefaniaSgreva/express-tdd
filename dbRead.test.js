// const { test, expect, jest } = require("@jest/globals");
const fs = require("fs");
const dbRead = require("./dbRead");

// Mock del metodo readFileSync di fs
jest.mock('fs');

test("Dovrebbe leggere dei dati dal file users.json e ritornare un oggetto", () => {
    // Definisco il comportamento del mock readFileSync
    fs.readFileSync.mockReturnValue(JSON.stringify([
        { name: "mario", surname: "rossi" }
    ]));

    const result = dbRead();

    expect(result).toEqual([
        { name: "mario", surname: "rossi" }
    ]);
});
