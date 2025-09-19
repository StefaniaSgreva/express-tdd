module.exports = function (str) {
    // Controlla che l'input sia una stringa, altrimenti lancia un errore
    if (typeof str !== 'string') {
        throw new Error('Input deve essere una stringa');
    }

    // Converte la stringa in minuscolo e rimuove gli spazi iniziali/finali
    let toReturn = str.toLowerCase().trim();

    // Array di caratteri accentati da sostituire
    const from = "àáâäãåèéêëìíîïòóôöõùúûü";
    // Array dei caratteri corrispondenti senza accenti
    const to   = "aaaaaaeeeeiiiiooooouuuu";

    // Loop per sostituire ogni carattere accentato con quello non accentato
    for (let i = 0; i < from.length; i++) {
        // Utilizzo regex globale per sostituire tutte le occorrenze
        toReturn = toReturn.replace(new RegExp(from[i], 'g'), to[i]);
    }

    // Sostituisce ogni sequenza di caratteri che non siano lettere (a-z) o numeri (0-9) con un trattino
    toReturn = toReturn.replace(/[^a-z0-9]+/g, '-');

    // Rimuove eventuali trattini all'inizio o alla fine della stringa
    toReturn = toReturn.replace(/^-+|-+$/g, '');

    // Restituisce la stringa trasformata in kebab-case
    return toReturn;
};
