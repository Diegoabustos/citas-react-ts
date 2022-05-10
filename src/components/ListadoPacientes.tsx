import { Paciente } from "../types";
import PacienteCita from "./Paciente";

interface Props {
  pacientes: Array<Paciente>;
  setPacientes?: React.Dispatch<React.SetStateAction<Paciente[]>>;
}

const ListadoPacientes = ({ pacientes }: Props): JSX.Element => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl  text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes.map((paciente) => (
        <PacienteCita paciente={paciente} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
