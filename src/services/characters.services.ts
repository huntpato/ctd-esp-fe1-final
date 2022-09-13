import Character from "../componentes/types/character.types";


export const searchCharacterAPI = async (name: string): Promise<Character[]> => {
    // let params = "?"
    // if(name){
    //     params += `name=${name}`
    // }
    // return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    //     .then(data => data.json())
    //     .then(data=> data.results)
    const response = await fetch(name);
    const data = await response.json();
    return data.results
}
