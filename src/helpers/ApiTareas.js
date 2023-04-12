import { URL } from "./ApiUrl";

export const getTareas = async () => {
    try {
        const fetchResponse = await fetch(`${URL}/tarea`, {
            method: "GET",
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const postTareas = async (dataBody) => {
    try {
        const fetchResponse = await fetch(`${URL}/tarea`, {
            method: "POST",
            body: JSON.stringify(dataBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const putTareas = async (id, dataBody) => {
    try {
        const fetchResponse = await fetch(`${URL}/tarea/${id}`, {
            method: "PUT",
            body: JSON.stringify(dataBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const deleteTareas = async (id) => {
    try {
        const fetchResponse = await fetch(`${URL}/tarea/${id}`, {
            method: "DELETE",
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (error) {
        return error;
    }
}