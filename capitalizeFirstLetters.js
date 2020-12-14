const assert = require('assert');


assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters("I am learning TDD"), "I Am Learning TDD");
assert.strictEqual(capitalizeFirstLetters("i"), "I");
assert.strictEqual(capitalizeFirstLetters(""), "");