const crearClaseViajero  = require("../06-07-08.js");
  
  describe('crearClaseViajero', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        expect(viajero.nombre).toBe('toni');
        expect(viajero.edad).toBe(23);
        expect(viajero.paises).toEqual(['Brasil', 'Francia']);
        expect(viajero.compañeros).toEqual([{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
    });
    it('should get age average with getPromedioEdad', function() {
      const Viajero = crearClaseViajero();
      const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}, { nombre: 'Peter', nacionalidad: 'Belga', edad: 37}]);
      expect(viajero.getPromedioEdad()).toBe(32);
    });
})