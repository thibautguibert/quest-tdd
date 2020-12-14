const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle of 10x5", () => {
    const rectangle = new Rectangle(10, 5);
    it("isn't a square", () => {
        assert.strictEqual(rectangle.isSquare(), false);
    });
    it("has an area of 50", () => {
        assert.strictEqual(rectangle.getArea(), 50);
    });
    it("has a perimeter of 30", () => {
        assert.strictEqual(rectangle.getPerimeter(), 30);
    });
})

describe("Rectangle of 6x6", () => {
    const rectangle = new Rectangle(6, 6);
    it("is a square", () => {
        assert.strictEqual(rectangle.isSquare(), true);
    });
    it("has an area of 36", () => {
        assert.strictEqual(rectangle.getArea(), 36);
    });
    it("has a perimeter of 24", () => {
        assert.strictEqual(rectangle.getPerimeter(), 24);
    });
})