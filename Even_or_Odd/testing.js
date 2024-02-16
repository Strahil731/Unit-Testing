import { assert } from "chai";
import { isOddOrEven } from "./Even or Odd.js";

describe("Test", function () {
    it("Test with non string value", function () {
        assert.equal(isOddOrEven({ prop: "Pesho" }), undefined, "return type is must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type is must be undefined");
        assert.isNotOk(isOddOrEven([]), "return type is must be undefined");
    });

    it("Test with valid string value", function () {
        assert.equal(isOddOrEven('Pesho'), "odd", "result is correct (odd)!");
        assert.equal(isOddOrEven("Goshoo"), "even", "result is correct (even)!");
    });
});