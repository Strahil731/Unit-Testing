import { assert } from "chai";
import { mathEnforcer } from "./Math enforcer.js";

describe("Test addFive functionality", function () {

    it("Test with invalid value", function () {
        assert.isUndefined(mathEnforcer.addFive("Pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
    });

    it("Test with valid value", function () {
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct!");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct!");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct!");
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct!");
    });
});

describe("Test subtractTen functionality", function () {

    it("Test with invalid value", function () {
        assert.isUndefined(mathEnforcer.subtractTen("pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined");
    });

    it("Test with valid value", function () {
        assert.equal(mathEnforcer.subtractTen(-10), -20, "result is correct!");
        assert.equal(mathEnforcer.subtractTen(0), -10, "result is correct!");
        assert.equal(mathEnforcer.subtractTen(10), 0, "result is correct!");
        assert.equal(mathEnforcer.subtractTen(15), 5, "result is correct!");
    });
});

describe("Test sum functionality", function () {

    it("Test with one invalid parameter", function () {
        assert.isUndefined(mathEnforcer.sum(1, "Pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("Pesho", 1), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("Gosho", "Pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 1), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(1, []), "return value must be undefined");
    });

    it("Test with two valid parameter", function(){
        assert.equal(mathEnforcer.sum(1, 1), 2, "result is correct!");
        assert.equal(mathEnforcer.sum(2, 3), 5, "result is correct!");
        assert.equal(mathEnforcer.sum(5, -5), 0, "result is correct!");
    });
});