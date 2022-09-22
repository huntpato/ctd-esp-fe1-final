import { ChangeEvent, FC, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersThunk } from '../../actions/characters.actions';
import './filtros.css';

/**
 * Componente para filtrar la busqueda de un personaje
 *  
 * @returns un JSX element
 */

export interface FiltrosProps {
  filterRef: RefObject<HTMLInputElement>;
}


const Filtros: FC<FiltrosProps> = ({ filterRef }) => {
  const MINIMUM_CHARS_TO_SEARCH = 3;
  const dispatch = useDispatch();

  /**
   *Función que filtra los personajes por la busqueda introducida en el input.
   *Con un minimo de 3 caracteres filtra por nombre del personaje,
   *si la busqueda es igual a 0 dispara el dispatch a la busqueda inicial de todo los personajes.
   *
   * @param {InputEvent} e evento del input
   */

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.target.value;
    if (currentSearch?.length >= MINIMUM_CHARS_TO_SEARCH) {
      dispatch(
        searchCharactersThunk(
          `https://rickandmortyapi.com/api/character/?name=${currentSearch}`
        )
      );
    }
    if (currentSearch?.length === 0) {
      dispatch(
        searchCharactersThunk('https://rickandmortyapi.com/api/character/')
      );
    }
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        ref={filterRef}
      />
    </div>
  );
};

export default Filtros;
