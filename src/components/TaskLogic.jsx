import Swal from "sweetalert2";
import { deleteTareas, putTareas } from "../helpers/ApiTareas";

export const eliminarTarea = (e, id) => {
  e.preventDefault();
  Swal.fire({
    title: "Eliminar tarea",
    text: "¡Estás apunto eliminar la tarea!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar Tarea",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteTareas(id).then((res) => console.log(res));
      window.location.reload();
    }
  });
};

export const editarTarea = (e, id, descripcion) => {
  e.preventDefault();
  Swal.fire({
    title: "Confirmar tarea",
    text: "¿Estás seguro de que quieres confirmar la tarea?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar Tarea",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      putTareas(id, { descripcion: descripcion, estado: "terminado" }).then(
        (res) => console.log(res)
      );
      window.location.reload();
    }
  });
};

export const FiltroPorEstado = ({setEstado, estado}) => {
  return (
    <form
      action=""
      className="border-solid border-gray-500 border w-72 px-2 py-1 rounded-md"
    >
      <p className="text-gray-500">Filtro por estado</p>

      <div className="flex justify-evenly">
        <label className="p-1 flex items-center justify-center">
          <input
            className="w-5 h-5 appearance-none border rounded-md transition-all duration-200 ease-out checked:bg-red-500"
            type="checkbox"
            checked={estado === "pendiente"}
            onChange={() =>
              setEstado(estado === "pendiente" ? "" : "pendiente")
            }
          />
          <span className="ml-1">Pendiente</span>
        </label>
        <br />
        <label className="p-1 flex items-center justify-center">
          <input
            className="w-5 h-5 appearance-none border rounded-md transition-all duration-200 ease-out checked:bg-green-500"
            type="checkbox"
            checked={estado === "terminado"}
            onChange={() =>
              setEstado(estado === "terminado" ? "" : "terminado")
            }
          />
          <span className="ml-1">Terminado</span>
        </label>
      </div>
    </form>
  );
};
