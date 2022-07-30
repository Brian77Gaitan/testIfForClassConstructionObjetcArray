const mismaCantidadCaracteres  = require("../02.js");

describe('mismaCantidadCaracteres', function() {
    it('should return ["hi"]', function() {
      expect(mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2)).toEqual(["hi"]);
    });
    it('should return ["pedro", "amigo"]', function() {
      expect(mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5)).toEqual(['pedro', 'amigo']);
    });
  });