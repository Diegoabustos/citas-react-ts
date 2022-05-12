import React from 'react';
import { useState } from "react";
import {Paciente} from '../types'
import Error from './Error'


interface Props {
  pacientes: Array<Paciente>
  setPacientes:  React.Dispatch<React.SetStateAction<Paciente[]>>
}


const Formulario = ({pacientes, setPacientes}: Props ) => {
  const [nombre, setNombre] = useState<string>("");
  const [propietario, setPropietario] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [sintomas, setSintomas] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación del  Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay un campo  vacío')
      setError(true);
      return;
    };
    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }
    setPacientes([...pacientes, objetoPaciente]);

    // Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center" data-testid="titulo" >Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error><p data-testid="alerta">Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            data-testid="nombre"
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            data-testid="propietario"
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            data-testid="email"
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            data-testid="alta"
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            data-testid="sintomas"
            name=""
            id="sintomas"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          data-testid="btn-submit"
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-COLORS"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
