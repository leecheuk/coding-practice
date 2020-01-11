var assert = require('assert');
var {expect} = require('chai');
var {two_sum} = require('./two_sum');

describe('Two Sum function', function() {
    it('should return two numbers that sum to target', function() {
        expect(two_sum([1, 2, 3], 5)).to.equal([1, 2]);
    });
});