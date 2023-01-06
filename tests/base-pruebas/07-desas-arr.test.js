import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-desas.arr', () => { 

    test('RetornarArreglo debe devolver un string y un numero', () => {

        const [ letters, numbers] = retornaArreglo();


        expect(typeof letters).toBe( 'string' )
        expect(typeof numbers).toBe( 'number' )

    });
 });