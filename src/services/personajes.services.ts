import { Personaje } from "../componentes/types/personaje.types";


export const searchCharacter = async (name?: string): Promise< Personaje[]> => {
    let params = "?"
    if(name){
        params += `name=${name}`
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
    const data =  await response.json();
    return data.results;
}