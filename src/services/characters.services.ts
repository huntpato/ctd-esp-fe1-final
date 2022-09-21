import DataAPI from "../componentes/types/data.types";

export const getCharactersAPI = async (url: string): Promise<DataAPI> => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }catch(error){
        throw new Error("No se encontraron personajes")
    }
};
