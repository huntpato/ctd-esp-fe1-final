import { FC } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import Character from '../types/character.types';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @author Patricia Hunt
 * @returns un JSX element 
 */
export interface TarjetaPersonajeProps{
    character: Character;
}

const TarjetaPersonaje : FC<TarjetaPersonajeProps> = ({ character }) => {

    return (   
    <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito character={character}/>
        </div>
    </div>)
}

export default TarjetaPersonaje;