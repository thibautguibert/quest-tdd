const assert = require('assert');
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
    it("is a function accepting one argument", () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it("transforms I am learning TDD sentence correctly", () => {
        assert.strictEqual(capitalizeFirstLetters("I am learning TDD"), "I Am Learning TDD");
    });

    it("works with a 1-character string", () => {
        assert.strictEqual(capitalizeFirstLetters('i'), 'I');
    });

    it("works with an empty string", () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
})