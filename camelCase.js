module.exports = function camelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input deve essere una stringa');
    }

    // Rimuove spazi iniziali/finali, converte in minuscolo
    str = str.trim().toLowerCase();

    // Divide la stringa in parole usando spazi, trattini o underscore come separatori
    const words = str.split(/[\s-_]+/);

    // La prima parola rimane minuscola, le seguenti iniziano con maiuscola
    const camelCased = words.map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Ritorna la stringa concatenata in camelCase
    return camelCased.join('');
};
