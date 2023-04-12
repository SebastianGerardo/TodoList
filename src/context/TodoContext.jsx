import React, {createContext, useEffect, useState} from 'react'
import { getTareas } from '../helpers/ApiTareas'

export const UserContext = createContext()

const TodoContext = ({children}) => {

    const [dataTarea, setDataTarea] = useState([])
    const [dataFiltrada, setDataFiltrada] = useState([])

    useEffect(() => {
        getTareas().then((res) => {setDataTarea(res.content); console.log(res), setDataFiltrada(res.content)})
    }, [])
    
  return (
    <UserContext.Provider value={{setDataTarea, dataTarea, setDataFiltrada, dataFiltrada}}>
      {children}
    </UserContext.Provider>
  )
}

export default TodoContext
