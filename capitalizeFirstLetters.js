const assert = require('assert');
const capitalizeFirst = require("./capitalizeFirst");

const capitalizeFirstLetters = (string) => {
    const words = string.split(" ");
    const capitalizedWords = words.map(word => capitalizeFirst(word));
    return capitalizedWords.join(" ");
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters("I am learning TDD"), "I Am Learning TDD");
assert.strictEqual(capitalizeFirstLetters("i"), "I");
assert.strictEqual(capitalizeFirstLetters(""), "");

capitalizeFirstLetters("i suck at sport, man...");
