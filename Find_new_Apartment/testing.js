import { assert } from 'chai';
import { findNewApartment } from './Find new Apartment.js';

describe("Test function", function () {

    describe("isGoodLocation functionality", function () {
        it("City input value", function () {
            assert.equal(findNewApartment.isGoodLocation("5", false), "This location is not suitable for you.");
            assert.equal(findNewApartment.isGoodLocation("", true), "This location is not suitable for you.");
        });

        it("Boolean value", function () {
            assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.");
        });

        it("True input value", function () {
            assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
        });

        it("Throw error invalid input", function () {
            assert.throw(() => findNewApartment.isGoodLocation(5, ""), "Invalid input!");
            assert.throw(() => findNewApartment.isGoodLocation([], "Sofia"), "Invalid input!");
        });
    });

    describe("isLargeEnough functionality", function () {
        it("It is apartment array", function () {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 40), "40, 50, 60");
        });

        it("Add apartment", function () {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 40), "40, 50, 60");
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 60), "60");
        });

        it("Return apartment array", function () {
            assert.equal(findNewApartment.isLargeEnough([50, 60], 50), "50, 60");
        });

        it("Throw input value error", function () {
            assert.throw(() => findNewApartment.isLargeEnough("50, 60, 70", "10"), "Invalid input!");
            assert.throw(() => findNewApartment.isLargeEnough([], 20), "Invalid input!");
        });
    });

    describe("isItAffordable functionality", function () {
        it("Don't enough budget", function () {
            assert.equal(findNewApartment.isItAffordable(55, 45), "You don't have enough money for this house!");
        });

        it("Enough budget", function () {
            assert.equal(findNewApartment.isItAffordable(45, 55), "You can afford this home!");
        });

        it("Throw input error", function () {
            assert.throw(() => findNewApartment.isItAffordable("50", []), "Invalid input!");
            assert.throw(() => findNewApartment.isItAffordable([], ""), "Invalid input!");
        });

        it("Input less and equal 0", function () {
            assert.throw(() => findNewApartment.isItAffordable(-20, 0), "Invalid input!");
        });
    });
});