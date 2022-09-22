
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { cleanFavourites } from "../actions/favourites.actions";
import Character from "../componentes/types/character.types";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import "../componentes/personajes/grilla-personajes.css";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos

 * @returns la pagina de favoritos
 */

const PaginaFavoritos : FC = () => {

    const favs = useSelector((state)=> state.fav.favouritesMap);
    const dispatch = useDispatch();

    const cleanFavs = () =>{
        dispatch(cleanFavourites());
    };

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={cleanFavs}>Limpiar Favoritos</button>
        </div>
        <div className="grilla-personajes">
            {!favs[0] && <div>No hay personajes favoritos</div>}
            {favs.map((character : Character)=>{
                return(
                    <TarjetaPersonaje key={character.id} character={character}/>
                )
            })}
        </div>
    </div>
}

export default PaginaFavoritos