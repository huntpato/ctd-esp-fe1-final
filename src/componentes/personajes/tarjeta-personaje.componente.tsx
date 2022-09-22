import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedCharacterAction } from '../../actions/detailCharacter.actions';
import BotonFavorito from '../botones/boton-favorito.componente';
import Character from '../types/character.types';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @returns un JSX element 
 */
export interface TarjetaPersonajeProps{
    character: Character;
}

const TarjetaPersonaje : FC<TarjetaPersonajeProps> = ({ character }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    /**
     * Función que dispara el dispatch y redirige a la página de detalle
     * al hacer click en la imagen del personaje.
     */
    const goToDetail = () => {
        dispatch(selectedCharacterAction(character));
        navigate("/detalle/")
    }

    return (   
    <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name} onClick={goToDetail}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito character={character}/>
        </div>
    </div>)
}

export default TarjetaPersonaje;