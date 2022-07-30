const agregaPropiedad  = require("../05.js");

describe('agregaPropiedad', function() {

    it('should return "[{ nombre: "toni", edad: null }, { nombre: "Emi", edad: 25 }]"', function() {
      expect(agregaPropiedad([{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }], 'edad')).toEqual([{ nombre: "toni", edad: null }, { nombre: "Emi", edad: 25 }]);
    });
    it('should return "[{ nombre: "toni" }, { nombre: "Emi", edad: 25 }]"', function() {
      expect(agregaPropiedad([{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }], 'nombre')).toEqual([{ nombre: "toni" }, { nombre: "Emi", edad: 25 }]);
    });
  });