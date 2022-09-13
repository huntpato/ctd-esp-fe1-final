import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersThunk } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import Character from '../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */


const GrillaPersonajes : FC = () => {

    const dispatch = useDispatch();
    const charactersSearch = useSelector(state => state.characters.characters);

    useEffect(()=>{
        dispatch(searchCharactersThunk("https://rickandmortyapi.com/api/character/"));
    },[])

    if(!charactersSearch || charactersSearch.length === 0){
        return <>Lo sentimos, no hay personajes</>
    }

    return (
        <div className="grilla-personajes">
            {charactersSearch?.map((character : Character) =>{
                return(
                    <TarjetaPersonaje key={character.id} characterData={character}/>
                );
            })}
        </div>)
}
 
export default GrillaPersonajes;