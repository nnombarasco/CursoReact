import { render } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en CounterApp', () =>{

    const initialValue = 100;

    test('debe de hacer match con el snapshot', () => {
          const { container } = render( <CounterApp /> );
          expect( container ).toMatchSnapshot();
    });

});