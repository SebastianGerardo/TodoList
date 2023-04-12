import React, { useState } from "react";
import { postTareas } from "../helpers/ApiTareas";

const AddTask = ({ handleCloseModal }) => {
  const [dataInput, setDataInput] = useState({
    descripcion: "",
    estado: "pendiente",
  });

  const handleInput = (e) => {
    setDataInput({
      ...dataInput,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    postTareas(dataInput).then((res) => {
        handleCloseModal();
        window.location.reload()
    });
  };


  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold uppercase text-2xl">Agregar nueva tarea</h2>
      <form action="" className="flex flex-col gap-5" onSubmit={enviarDatos}>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Descripcion
          </span>
          <input
            autoComplete="off"
            type="text"
            name="descripcion"
            required
            onChange={handleInput}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Limpiar la casa..."
          />
        </label>
        <button
          className="px-4 py-1 text-sm bg-green-400 text-white rounded-md transition-all ease-in duration-200 shadow-[.3rem_.3rem_1rem_#ccc,_-.3rem_-.3rem_1rem_#fff] hover:shadow-[.3rem_.3rem_1rem_#fff,_-.3rem_-.3rem_1rem_#ccc] active:shadow-[inset_.1rem_.1rem_1rem_#4ADE80,_inset_-.1rem_-.1rem_1rem_#4ADE80]"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
