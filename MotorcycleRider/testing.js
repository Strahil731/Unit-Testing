import { assert } from 'chai';
import { motorcycleRider } from './Motorcycle Rider.js';

describe("Test site", function () {

    describe("licenseRestriction functionality", function () {
        it("Return correct output for AM", function () {
            assert.equal(motorcycleRider.licenseRestriction("AM"), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });

        it("Return correct output for A1", function () {
            assert.equal(motorcycleRider.licenseRestriction("A1"), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });

        it("Return correct output for A2", function () {
            assert.equal(motorcycleRider.licenseRestriction("A2"), "Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });

        it("Return correct output for A", function () {
            assert.equal(motorcycleRider.licenseRestriction("A"), "No motorcycle restrictions, and the minimum age is 24.");
        });

        it("Throw error invalid input", function () {
            assert.throw(() => motorcycleRider.licenseRestriction("B"));
        });

        it("Throw error invalid input number", function () {
            assert.throw(() => motorcycleRider.licenseRestriction(20));
        });
    });

    describe("motorcycleShowroom functionality", function () {
        it("Return 1 element from array", function () {
            assert.equal(motorcycleRider.motorcycleShowroom(['50'], 50), "There are 1 available motorcycles matching your criteria!");
        });

        it("Return all elements from array", function () {
            assert.equal(motorcycleRider.motorcycleShowroom(['50', '51'], 100), "There are 2 available motorcycles matching your criteria!");
        });

        it("Return only matching elements from array", function () {
            assert.equal(motorcycleRider.motorcycleShowroom(['50', '51'], 50), "There are 1 available motorcycles matching your criteria!");
        });

        it("Throw for non-array", function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom('50', 50), "Invalid Information!");
        });

        it("Throw for non-number", function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom(['50'], '50'), "Invalid Information!");
        });
    });

    describe("otherSpendings functionality", function () {
        it("Return correct sum without discount", function () {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false), "You spend $600.00 for equipment and consumables!");
        });

        it("Return correct sum with discount", function () {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true), "You spend $540.00 for equipment and consumables with 10% discount!");
        });

        it("Throw error for non-array equipment", function () {
            assert.throw(() => motorcycleRider.otherSpendings('helmet', ['engine oil', 'oil filter'], false), "Invalid Information!");
        });
    });
});