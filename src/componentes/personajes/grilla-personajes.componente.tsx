import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersThunk } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import Character from '../types/character.types';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import './grilla-personajes.css';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @returns un JSX element 
 */

const GrillaPersonajes : FC = () => {

    const dispatch = useDispatch();
    const {data, status} = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(searchCharactersThunk("https://rickandmortyapi.com/api/character/"));
    },[]);

    if(status === "LOADING") return <>Cargando personajes...</>
    if(!data || data?.results?.length === 0 || data?.error?.length >= 1) return <>Lo sentimos, no hay personajes con ese nombre :(</>;

    return (
        <div className="grilla-personajes">
            {data?.results?.map((character : Character) =>{
                return(
                    <TarjetaPersonaje key={character.id} character={character}/>
                );
            })}
        </div>)
}
 
export default GrillaPersonajes;