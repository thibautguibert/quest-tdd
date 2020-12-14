const assert = require('assert');
const capitalizeFirst = require("../capitalizeFirst");

// give the test suite a label using describe (regroup several tests under a shared label)
describe("capitalizeFirst", () => {
    //give the test a label using "it" and defines the test with 2nd param
    it("is a function accepting one argument", () => {
        assert.strictEqual(typeof capitalizeFirst, 'function');
        assert.strictEqual(capitalizeFirst.length, 1);
    });

    it("transforms javaScript correctly", () => {
        assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
    });

    it("works with a 1-character string", () => {
        assert.strictEqual(capitalizeFirst('z'), 'Z');
    });

    it("works with an emptyy string", () => {
        assert.strictEqual(capitalizeFirst(''), '');
    });
});