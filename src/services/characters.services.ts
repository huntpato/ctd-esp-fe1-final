import DataAPI from "../componentes/types/data.types";
import Episode from "../componentes/types/episode.types";

export const getCharactersAPI = async (url: string): Promise<DataAPI> => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }catch(error){
        throw new Error("No se encontraron personajes")
    }
};

export const getEpisodesAPI = async (episodes : string) : Promise<Episode[]> =>{
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode/' + episodes);
        const data = await response.json();
        
        if(data.id){
            let auxEpisodes: Episode[] = []
            auxEpisodes.push(data)
            return auxEpisodes
        }else{
            return data;
        }
    }catch(error) {
        throw new Error("No se encontraron episodios")
    }
};
