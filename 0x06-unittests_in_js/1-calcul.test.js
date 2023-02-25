var calculateNumber = require('./1-calcul.js');
var assert = require('assert');


describe('calculateNumber()', function () {
  describe('type === SUM', function () {
    it('sum 1', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
    it('floating point whole numbers (ADD)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
    });
    it('rounding down b\'s floating point fractional number(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM',1.0, 2.4), 3);
    });
    it('rounding down a and b\'s floating point fractional number(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    });
    it('rounding down a\'s floating point fractional number(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    });
    it('rounding up b\'s floating point fractional numbers(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    });
    it('rounding up a and b\'s floating point fractional numbers(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.5), 6);
    });
    it('rounding up a\'s floating point fractional numbers(SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s (SUM)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });
  
  describe('type === SUBTRACT', () => {
    it('sum 2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
    it('floating point whole numbers (SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.0), -1);
    });
    it('rounding down b\'s floating point fractional number(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT',1.0, 2.4), -1);
    });
    it('rounding down a and b\'s floating point fractional number(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
    });
    it('rounding down a\'s floating point fractional number(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.0), -1);
    });
    it('rounding up b\'s floating point fractional numbers(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.5), -2);
    });
    it('rounding up a and b\'s floating point fractional numbers(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.5), 0);
    });
    it('rounding up a\'s floating point fractional numbers(SUBSTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.0), 1);
    });  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s (SUBTRACT)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });
  
  describe('type === DIVIDE', () => {
    it('sum 3', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });
    it('sum 4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('floating point whole numbers (DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.0), 0.5);
    });
    it('rounding down b\'s floating point fractional number(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE',1.0, 2.4), 0.5);
    });
    it('rounding down a and b\'s floating point fractional number(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
    });
    it('rounding down a\'s floating point fractional number(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.0), 0.5);
    });
    it('rounding up b\'s floating point fractional numbers(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.5), 1/3);
    });
    it('rounding up a and b\'s floating point fractional numbers(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 2.5), 1);
    });
    it('rounding up a\'s floating point fractional numbers(DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 2.0), 1.5);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s (DIVIDE)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.499999, 3.499999), 2/3);
    });
  });
});
