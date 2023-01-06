import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar un obj', () => {

        const user = { nombreClave: 'Zorro1', anios: 28, rango:'Capitan', latlng: {lat: 14.1232,lng: -12.3232} };

        const datos = usContext( user );

        expect( datos ).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }})
    });

});