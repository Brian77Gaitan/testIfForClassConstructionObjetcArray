const crearClaseViajero  = require("../06-07-08.js");

describe('crearClaseViajero', function() {
    it('should add a country with addPais', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        viajero.addPais('Mexico');
        expect(viajero.paises[2]).toBe('Mexico');
    });
  
    it('should get all countries with getPaises', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        expect(viajero.getPaises()).toEqual(['Brasil', 'Francia']);
    });
})