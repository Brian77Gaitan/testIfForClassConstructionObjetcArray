const sumaTodosPrimos  = require("../03.js");

describe('sumaTodosPrimos', function() {
    it('should return 21 with [1, 5, 2, 9, 3, 4, 11]', function() {
      expect(sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11])).toBe(21);
    });
    it('should return 23 with [0,5,7,10,11,15,20]', function() {
      expect(sumaTodosPrimos([0,5,7,10,11,15,20])).toBe(23);
    });
    it('should return 35 with [-2,5,7,10,23,10,25]', function() {
      expect(sumaTodosPrimos([-2,5,7,10,23,10,25])).toBe(35);
    });
  });