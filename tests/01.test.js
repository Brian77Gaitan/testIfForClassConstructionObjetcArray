const mayorMenor  = require("../01.js");

describe('mayorMenor', function() {
    it('should return [1, 10] for [1,2,3,4,5,6,7,8,9,10]', function() {
      expect(mayorMenor([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 10]);
    });
    it('should return [-10, 10] for [-10,2,3,4,5,6,7,8,9,10]', function() {
      expect(mayorMenor([-10,2,3,4,5,6,7,8,9,10])).toEqual([-10, 10]);
    });
     it('should return [1, 10] for [1, 10]', function() {
      expect(mayorMenor([1, 10])).toEqual([1, 10]);
    });
  });