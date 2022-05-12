import { Paciente } from "../types";
import PacienteCita from "./PacienteCita";

interface Props {
  pacientes: Array<Paciente>;
  setPacientes?: React.Dispatch<React.SetStateAction<Paciente[]>>;
}

const ListadoPacientes = ({ pacientes }: Props): JSX.Element => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl  text-center">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <PacienteCita key={paciente.id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl  text-center">
            NO hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
