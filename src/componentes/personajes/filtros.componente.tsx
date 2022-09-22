import { ChangeEvent, FC, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersThunk } from '../../actions/characters.actions';
import './filtros.css';

export interface FiltrosProps {
  filterRef: RefObject<HTMLInputElement>
}

const Filtros : FC<FiltrosProps> = ({filterRef}) => {

  const MINIMUM_CHARS_TO_SEARCH = 3;
  const dispatch = useDispatch();

  const handleChange = async(e : ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.target.value;
    if(currentSearch?.length >= MINIMUM_CHARS_TO_SEARCH){
      dispatch(searchCharactersThunk(`https://rickandmortyapi.com/api/character/?name=${currentSearch}`))
    };
    if(currentSearch?.length === 0){
      dispatch(searchCharactersThunk("https://rickandmortyapi.com/api/character/"))
    }
  }

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
