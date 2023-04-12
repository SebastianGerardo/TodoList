import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/TodoContext";

const Search = () => {
  const { dataTarea, setDataFiltrada } = useContext(UserContext);

  const handleSearch = (e) => {
    const { value } = e.target;
    if(value.length > 2) {
        const dataFiltrada = dataTarea.filter((tarea) => {
          return tarea.descripcion.toLowerCase().includes(value.toLowerCase());
        });
        setDataFiltrada(dataFiltrada);
    } else {
        setDataFiltrada(dataTarea)
    }
  };

  return (
    <label className="relative block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <input
        className="placeholder:text-slate-500 placeholder:text-sm block bg-white w-full border-none rounded-md py-2 pl-9 pr-3 outline-none  sm:text-lg"
        placeholder="Search"
        type="text"
        name="search"
        autoComplete="off"
        onChange={handleSearch}
      />
    </label>
  );
};

export default Search;
