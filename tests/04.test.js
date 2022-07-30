const sumArray  = require("../04.js");

describe('sumArray', function() {
    it('should return true with [2,5,7,10,11,15,20], 2 + 11 = 13', function() {
      expect(sumArray([2,5,7,10,11,15,20], 13)).toBe(true);
    });
    it('should return false.', function() {
      expect(sumArray([2,5,7,10,11,15,20], 14)).toBe(false);
    });
    it('should return false (cant sum the same number with itself)', function() {
      expect(sumArray([2,5,7,10,11,15,20], 4)).toBe(false);
    });
  });