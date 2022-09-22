import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { useEffect, useState } from "react";
import { getEpisodesAPI } from "../services/characters.services";
import Episode from "../componentes/types/episode.types";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const dispatch = useDispatch();
    const {selectedCharacter} = useSelector((state)=> state.selected);
    const [arrayEpisodes, setArrayEpisodes] = useState<Episode[]>([]);

    const getEpisodes = () => {
        const episodeIDs = selectedCharacter?.episode.map((episode) => {
            return episode.split("/").at(-1);
        })
        return episodeIDs?.join(",")
    };
  
    useEffect(()=>{
        const stringEpisodes = getEpisodes();
        stringEpisodes && getEpisodesAPI(stringEpisodes).then(data => setArrayEpisodes(data))
    },[]);

    if(!selectedCharacter) return <div className={"detalle-header-texto-fail"}>Seleccione un personaje para ver el detalle</div>
    
    return (
        <div className="container">
        <h3>{selectedCharacter?.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={selectedCharacter?.image} alt={selectedCharacter?.name}/>
                <div className={"detalle-header-texto"}>
                    <p>{selectedCharacter?.name}</p>
                    <p>Planeta: {selectedCharacter?.origin?.name}</p>
                    <p>Genero: {selectedCharacter?.gender}</p>
                </div>
                <BotonFavorito character={selectedCharacter}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {arrayEpisodes?.map((episode)=>{
                return(
                    <TarjetaEpisodio key={episode.id} episode={episode.episode} date={episode.air_date} name={episode.name}/>
                )
            })}
        </div>
    </div>
    )
}

export default PaginaDetalle