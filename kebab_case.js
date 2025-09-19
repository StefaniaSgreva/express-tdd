module.exports = function (str) {
    let toReturn = str;

    toReturn = toReturn.split(" ").join("-");
    toReturn = toReturn.split("").map((char) => {
        const invalidCars = ["è", "é", "ì", "à", "ù","ò"];

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

    return toReturn;
};