module.exports = function (str) {
    if (typeof str !== 'string') {
        throw new Error('Input deve essere una stringa');
    }

    // Converti tutti i caratteri in munuscolo
    let toReturn = str.toLowerCase();

    // Sostituisci spazi con trattini
    toReturn = toReturn.split(" ").join("-");

    // Mappa caratteri accentati ai corrispettivi normali
    toReturn = toReturn.split("").map((char) => {
        switch (char) {
            case "è":
            case "é":
                return "e";
            case "ì":
                return "i";
            case "à":
                return "a";
            case "ù":
                return "u";
            case "ò":
                return "o";
            default:
                return char;
        }
    }).join("");

    // Rimuovi o sostituisci caratteri speciali indesiderati
    toReturn = toReturn.replace(/['?_\!£&%]/g, "-");

    // Sostituisci più trattini consecutivi con uno solo
    toReturn = toReturn.replace(/-+/g, "-");

    // Rimuovi trattini iniziali o finali se presenti
    toReturn = toReturn.replace(/^-+|-+$/g, "");

    return toReturn;
};
