import Character from "../componentes/types/character.types";

export const getCharactersAPI = async (url: string): Promise<Character[]> => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }catch(error){
        throw new Error("No se encontraron presonajes")
    }
}
