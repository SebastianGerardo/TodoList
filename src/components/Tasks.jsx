import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/TodoContext";
import { Orbit } from "@uiball/loaders";
import { CloseIcon, EditIcon } from "../assets/svgs/Svgs";
import { editarTarea, eliminarTarea, FiltroPorEstado } from "./TaskLogic";

export default function Tasks() {
  const { dataFiltrada } = useContext(UserContext);
  const [loader, setLoader] = useState(true);
  const [estado, setEstado] = useState("pendiente");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(false);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const colorTarea = {
    pendiente: "bg-red-400",
    terminado: "bg-green-400",
    "": "bg-gray-400",
  };

  const filtroEstado = dataFiltrada.filter((tarea) => tarea.estado && tarea.estado.includes(estado));

  return (
    <>
      <div className="flex items-center flex-col gap-y-4 min-[850px]:flex-row min-[850px]:justify-between">
        <h1 className="text-5xl font-semibold">Tasks</h1>
        <FiltroPorEstado setEstado={setEstado} estado={estado} />
      </div>
      {loader ? (
        <section className="w-full h-full flex justify-center">
          <Orbit />
        </section>
      ) : (
        <section className="grid grid-cols-1 min-[850px]:grid-cols-3 lg:grid-cols-4 min-[1280px]:grid-cols-5 min-[1500px]:grid-cols-6 gap-2 ">
          {filtroEstado.length > 0 &&
            filtroEstado.map((tarea, index) => (
              <div
                key={tarea.id}
                className={`flex flex-col gap-y-2 w-[13.5rem] h-[12.3rem] max-w-[13.5rem] max-h-[12.3rem] ${
                  colorTarea[tarea.estado]
                } p-4 rounded-xl relative`}
              >
                {/* TITULO */}
                <h2 className="cursor-default font-medium leading-tight">
                  Tarea {index + 1}
                </h2>
                {/* DESCRIPCION */}
                <p className="cursor-default capitalize">{tarea.descripcion}</p>

                {/* Eliminar tarea */}
                {tarea.estado === "pendiente" && (
                  <button
                    onClick={(e) => eliminarTarea(e, tarea.id)}
                    className="absolute top-2 right-2 p-1"
                  >
                    <CloseIcon />
                  </button>
                )}

                {/* Confirmar tarea */}
                {tarea.estado === "pendiente" && (
                  <button
                    onClick={(e) => editarTarea(e, tarea.id, tarea.descripcion)}
                    className="absolute bottom-2 right-2  px-2 py-1"
                  >
                    <EditIcon />
                  </button>
                )}
              </div>
            ))}
        </section>
      )}
    </>
  );
}
