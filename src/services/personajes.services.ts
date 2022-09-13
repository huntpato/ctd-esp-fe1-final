import Character from "../componentes/types/character.types";


export const searchCharacter = async (name?: string): Promise< Character[]> => {
    let params = "?"
    if(name){
        params += `name=${name}`
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
    const data =  await response.json();
    return data.results;
}