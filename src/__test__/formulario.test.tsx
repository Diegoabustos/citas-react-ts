import React from 'react';
import Formulario from "../components/Formulario";
import { getByTestId, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Error from "../components/Error";


const setPacientes = jest.fn();

test('<Formulario /> Cargar el formulario', () => {
    render(<Formulario pacientes={[]} setPacientes={setPacientes}/>);
    // expect( screen.getByText('Seguimiento Pacientes') ).toBeInTheDocument(true);


    // Heading
    const titulo = screen.getByTestId('titulo');
    expect(titulo.tagName).toBe('H2');
    expect( titulo.tagName ).not.toBe('H1');
    expect( titulo.textContent ).toBe('Seguimiento Pacientes');

    // Botón de Submit
    expect( screen.getByTestId('btn-submit').tagName ).toBe('INPUT');
});

test('<Formulario /> Submit', () => {
    render(<Formulario pacientes={[]} setPacientes={setPacientes}/>);
    
    // Click en el botón de submit
    const btnSubmit = screen.getByTestId('btn-submit');
    userEvent.click(btnSubmit);
})

test('<Formulario /> Validación de formulario', () => {
    render(<Formulario pacientes={[]} setPacientes={setPacientes}/>);


    userEvent.type(screen.getByTestId('nombre'), '');
    userEvent.type(screen.getByTestId('propietario'), '');
    userEvent.type(screen.getByTestId('email'), '');
    userEvent.type(screen.getByTestId('alta'), '');
    userEvent.type(screen.getByTestId('sintomas'), '');

    // Revisar por la alerta
    const alerta = screen.queryByTestId('alerta'); 
    expect( alerta ).not.toBeInTheDocument();

        //  Crear cita y comprobar que la función se haya llamado
        // expect( setPacientes ).toHaveBeenCalled();
        // expect( setPacientes ).toHaveBeenCalledTimes(1);

})
