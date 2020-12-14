const capitalizeFirst = require("./capitalizeFirst");

const capitalizeFirstLetters = (string) => {
    const words = string.split(" ");
    const capitalizedWords = words.map(word => capitalizeFirst(word));
    return capitalizedWords.join(" ");
}

module.exports = capitalizeFirstLetters;