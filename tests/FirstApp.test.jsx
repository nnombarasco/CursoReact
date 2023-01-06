import { getByTestId, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

/*     test('Debe hacer match con el snapshot', () => {

        const title = 'Hola, esto es un titulo'
        const { container } = render( <FirstApp title={ title }/> )

        expect( container ).toMatchSnapshot();

    }); */

    test('Debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, esto es un titulo'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> )
        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
          
        const title = 'Hola, esto es un titulo'
        const subTitle = 'Hola, esto es un subtitulo'
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle= { subTitle }
            /> 
        )
        expect( getAllByText(subTitle).length ).toBe(2);
    });
});