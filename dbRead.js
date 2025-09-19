const fs = require("fs");

module.exports = function() {
    // Legge il file users.json come stringa UTF-8
    const jsonString = fs.readFileSync("./users.json", "utf8");

    // Parsea e ritorna l'oggetto JSON
    return JSON.parse(jsonString);
}
