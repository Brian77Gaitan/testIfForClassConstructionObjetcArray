const crearClaseViajero  = require("../06-07-08.js");
describe('crearClaseViajero', function() {
    it('should add a partner with addCompañero', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        viajero.addCompañero('Peter', 'Belga', 37);
        expect(viajero.compañeros[1]).toEqual({ nombre: 'Peter', nacionalidad: 'Belga', edad: 37});
    });
    it('should get all partners with getCompañeros', function() {
    const Viajero = crearClaseViajero();
    const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}, { nombre: 'Peter', nacionalidad: 'Belga', edad: 37}]);
    expect(viajero.getCompañeros()).toEqual(['John','Peter']);
    });
})