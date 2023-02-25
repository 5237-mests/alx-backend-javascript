var calculateNumber = require('./2-calcul_chai');
var assert = require('assert');
var expect = require('chai').expect;


describe('calculateNumber()', function () {
  describe('type === SUM', function () {
    it('floating point whole numbers (ADD)', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
    
    it('floating point whole numbers (ADD)', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });

    it('rounding down b\'s floating point fractional number(SUM)', () => {
      expect(calculateNumber('SUM',1.0, 2.4)).to.equal(3);
    });

    it('rounding down a and b\'s floating point fractional number(SUM)', () => {
      expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    });

    it('rounding down a\'s floating point fractional number(SUM)', () => {
      expect(calculateNumber('SUM', 1.4, 2.0)).to.equal(3);
    });

    it('rounding up b\'s floating point fractional numbers(SUM)', () => {
      expect(calculateNumber('SUM', 1.0, 2.5)).to.equal(4);
    });

    it('rounding up a and b\'s floating point fractional numbers(SUM)', () => {
      expect(calculateNumber('SUM', 2.6, 2.5)).to.equal(6);
    });

    it('rounding up a\'s floating point fractional numbers(SUM)', () => {
      expect(calculateNumber('SUM', 2.6, 2.0)).to.equal(5);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s (SUM)', () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    });
  });
  
  describe('type === SUBTRACT', () => {
    it('sum 2', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('floating point whole numbers (SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.0)).to.equal(-1);
    });

    it('rounding down b\'s floating point fractional number(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT',1.0, 2.4)).to.equal(-1);
    });

    it('rounding down a and b\'s floating point fractional number(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.4)).to.equal(-1);
    });

    it('rounding down a\'s floating point fractional number(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.0)).to.equal(-1);
    });

    it('rounding up b\'s floating point fractional numbers(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.5)).to.equal(-2);
    });

    it('rounding up a and b\'s floating point fractional numbers(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.5)).to.equal(0);
    });

    it('rounding up a\'s floating point fractional numbers(SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.0)).to.equal(1);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s (SUBTRACT)', () => {
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });
  
  describe('type === DIVIDE', () => {
    it('sum 3', function () {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });

    it('sum 4', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('floating point whole numbers (DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.0)).to.equal(0.5);
    });

    it('rounding down b\'s floating point fractional number(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE',1.0, 2.4)).to.equal(0.5);
    });

    it('rounding down a and b\'s floating point fractional number(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
    });

    it('rounding down a\'s floating point fractional number(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.0)).to.equal(0.5);
    });

    it('rounding up b\'s floating point fractional numbers(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.5)).to.equal(1/3);
    });

    it('rounding up a and b\'s floating point fractional numbers(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 2.6, 2.5)).to.equal(1);
    });

    it('rounding up a\'s floating point fractional numbers(DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 2.6, 2.0)).to.equal(1.5);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s (DIVIDE)', () => {
      expect(calculateNumber('DIVIDE', 2.499999, 3.499999)).to.equal(2/3);
    });
  });
});
