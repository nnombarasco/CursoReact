import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe retornar un heroe por ID', () => {

        const id= 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual(
            {id: 1,name: 'Batman',owner: 'DC'}
        )
    });

    test('getHeroesById debe retornar undefined si no existe el  ID', () => {

        const id= 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();
    });


    test('getHeroesByOwner debe retornar los heroes de DC', () => {

        const owner = 'DC';
        const getOwner = getHeroesByOwner( owner );

        expect( getOwner.length ).toBe(3);
        expect( getOwner ).toEqual(getOwner.filter( (heroe) => heroe.owner === owner ))
    });

    test('getHeroesByOwner debe retornar los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

        
    });
});