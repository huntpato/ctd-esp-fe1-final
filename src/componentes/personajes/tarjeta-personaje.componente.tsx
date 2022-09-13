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
    characterData: Character;
}

const TarjetaPersonaje : FC<TarjetaPersonajeProps> = ({ characterData }) => {

    return (   
    <div className="tarjeta-personaje">
        <img src={characterData.image} alt={characterData.name}/>
        <div className="tarjeta-personaje-body">
            <span>{characterData.name}</span>
            <BotonFavorito esFavorito={false}/>
        </div>
    </div>)
}

export default TarjetaPersonaje;