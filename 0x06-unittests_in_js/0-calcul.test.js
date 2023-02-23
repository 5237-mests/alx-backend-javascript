var assert = require('assert');
var calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should calculateNumber(1, 3.7) return 5 ', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should calculateNumber(1.2, 3.7) return 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should calculateNumber(1.5, 3.7) return 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
