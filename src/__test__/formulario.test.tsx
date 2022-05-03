import React from 'react';
import Formulario from "../components/Formulario";
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const setPacientes = jest.fn();

test('<Formulario /> Cargar el formulario', () => {

    render(<Formulario pacientes={[]} setPacientes={setPacientes}/>);
});